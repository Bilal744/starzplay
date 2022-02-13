import React, { useEffect, useState, lazy, Suspense } from "react";
import { DotLineLoader } from "react-inline-loaders";
import ClipLoader from "react-spinners/ClipLoader";
import API from "../api/index";

const SimpleBanner = lazy(() => import("../components/simpleBanner"));
const HeroBanner = lazy(() => import("../components/HeroBanner"));

const Main = () => {
	const [content, setContent] = useState();
	const [isLoading, setIsLoading] = useState();
	const fetchData = async (next) => {
		setIsLoading(true);
		try {
			const response = await API.get(`/get?next=${next}`);
			if (next == 3) {
				setContent(response.data);
				console.log("asadsaddsadsadsa", response.data);
				setIsLoading(false);
			} else {
				setContent((prevContent) => {
					let tempContent = { ...prevContent };
					tempContent.titles = tempContent.titles?.concat(
						...response.data.titles
					);
					tempContent.nextPage = response.data.nextPage;
					setContent(tempContent);
					setIsLoading(false);
				});
			}
		} catch (error) {
			console.log("adssdasaddsada", error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		fetchData(3);
	}, []);
	const scrollEnd = () => {
		setIsLoading(true);
		fetchData(content.nextPage);
	};
	window.onscroll = function () {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.offsetHeight
		) {
			scrollEnd();
		}
	};
	return (
		<>
			<div>
				{content?.titles?.length > 0 && (
					<Suspense fallback={<DotLineLoader />}>
						<HeroBanner
							key={content?.titles[0].moduleId}
							id={content?.titles[0].moduleId}
							title={content?.titles[0].title}
							movies={content?.titles[0].layoutTitles?.titles}
						/>
					</Suspense>
				)}
			</div>
			<div>
				{content?.titles?.map((title, index) => {
					if (title.moduleType !== "HERO") {
						return (
							<Suspense key={`${title.moduleId}`} fallback={<DotLineLoader />}>
								<SimpleBanner
									key={title.moduleId}
									id={title.moduleId}
									index={index}
									title={title.title}
									movies={title.layoutTitles?.titles}
								/>
							</Suspense>
						);
					}
				})}
			</div>
		</>
	);
};
export default Main;
