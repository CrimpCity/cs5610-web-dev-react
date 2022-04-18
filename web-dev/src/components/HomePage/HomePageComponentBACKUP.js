import { React, useState, useEffect, useCallback, useMemo } from "react";
import HomeBannerComponent from "../HomeBanner/HomeBannerComponent.js";
import NavigationTopBar from "../NavigationTopBar/index.js";
import BoxArtList from "../BoxArtList/index.js"

import * as moviesService from '../../services/movies-service.js';


import './home-page.css';


// import Trending from "../data/Movie.json";
// import TopPicks from "../data/TopPicks.json";

import TrendingJson from "../data/Movie.json";
import TopPicksJson from "../data/TopPicks.json";

const HomePageComponent = () => {

    const [bookmarks, setBookmarks] = useState([]);
    const trendingIDs = useMemo(() => ["625c6a217cdc9b794203a8c9",
        "625c6a267cdc9b794203a8cb",
        "625c6a287cdc9b794203a8cd",
        "625c6a2a7cdc9b794203a8cf",
        "625c6a2c7cdc9b794203a8d1"], []);
    // let trendingIDs = [
    //     "625c6a217cdc9b794203a8c9",
    //     "625c6a267cdc9b794203a8cb",
    //     "625c6a287cdc9b794203a8cd",
    //     "625c6a2a7cdc9b794203a8cf",
    //     "625c6a2c7cdc9b794203a8d1"];



    const getTrending = async (trendingIDs) => {
        const promises = await trendingIDs.map(async (mid) => (moviesService.findMovieById(mid)));
        const resolved = await Promise.all(promises);
        console.log("resolved");
        console.log(resolved);
        setBookmarks(resolved);
        return resolved;
    };

    // const Trending = getTrending(trendingIDs);



    // console.log("Trending");
    // console.log(movs());

    // // Get the current logged in user's bookmarks
    // const getTrending = useCallback(() => {
    //     const promises = trendingIDs.map(async (mid) => (moviesService.findMovieById(mid)));
    //     const resolved = Promise.all(promises);
    //     console.log("resolved");
    //     console.log(resolved);
    //     setBookmarks(resolved);
    //     return resolved;
    // }, [trendingIDs]);



    const renderMovies = useCallback(
        () => {
            const movs = async () => {
                const Trending = await getTrending(trendingIDs);
                return Trending;
            }
            movs();
        },
        [trendingIDs]);


    // Don't get bookmarks on each rendering
    useEffect(() => {

        let isMounted = true;
        renderMovies();
        return () => { isMounted = false; }
    }, [renderMovies]);
















    // let trendingIDs = [
    //     { "_id": "625c6a217cdc9b794203a8c9" },
    //     { "_id": "625c6a267cdc9b794203a8cb" },
    //     { "_id": "625c6a287cdc9b794203a8cd" },
    //     { "_id": "625c6a2a7cdc9b794203a8cf" },
    //     { "_id": "625c6a2c7cdc9b794203a8d1" }];



    let topIDs = [
        "625c71477cdc9b794203a8d4",
        "625c71507cdc9b794203a8d6",
        "625c71577cdc9b794203a8d8",
        "625c71627cdc9b794203a8da",
        "625c71677cdc9b794203a8dc"];

    // let topIDs = [
    //     { "_id": "625c71477cdc9b794203a8d4" },
    //     { "_id": "625c71507cdc9b794203a8d6" },
    //     { "_id": "625c71577cdc9b794203a8d8" },
    //     { "_id": "625c71627cdc9b794203a8da" },
    //     { "_id": "625c71677cdc9b794203a8dc" }];


    // const getTrending = async (trendingIDs) => {
    //     let promises = await trendingIDs.map(mid => (moviesService.findMovieById(mid)));
    //     // return Promise.allSettled(promises);
    //     // return promises;
    //     const resolved = Promise.all(promises)

    //     console.log("resolved");
    //     console.log(resolved);
    //     return resolved;
    // };


    // const Trending = getTrending(trendingIDs);


    // const promises = boards.map(async (boardI) => {
    //     const posts = await Post.find({ board: boardI.slug });
    //     return [boardI.slug, posts.length];
    // });
    // const postCount = await Promise.all(promises);
    // console.log(postCount);






    // const getTrending = (trendingIDs) => {
    //     const promisesArray = trendingIDs.map(async (item) => {
    //         return moviesService.findMovieById(item);
    //     });
    //     return Promise.all(promisesArray);
    // };



    // const getTrending = async (trendingIDs) => {
    //     const promises = await trendingIDs.map(async (mid) => (moviesService.findMovieById(mid)));
    //     const resolved = await Promise.all(promises);
    //     console.log("resolved");
    //     console.log(resolved);
    //     return resolved;
    // };

    // const Trending = getTrending(trendingIDs);

    // console.log("Trending");
    // console.log(Trending);



    // const getTrending = async (trendingIDs) => {
    //     let promises = trendingIDs.map(async (mid) => {
    //         const posts = await moviesService.findMovieById(mid);
    //         return posts;
    //     });
    //     // const resolved = Promise.all(promises.then(res => res))
    //     // const resolved = promises;

    //     console.log("promises");
    //     console.log(promises);

    //     // console.log("resolved");
    //     // console.log(resolved);
    //     return Promise.all(promises);
    // };


    // let Trending = getTrending(trendingIDs);




    // async function getTrending(trendingIDs) {
    //     let values = await trendingIDs.map(mid => moviesService.findMovieById(mid));
    //     return values;
    // };

    // const Trending = getTrending(trendingIDs);

    // const Trending = trendingIDs.map(mid => {
    //     const values = (moviesService.findMovieById(mid)).then(result => result.json());
    //     return values;
    // });

    // const TopPicks = topIDs.map(mid => {
    //     const values = (moviesService.findMovieById(mid)).then(result => result.json());
    //     return values;
    // });
    // console.log("Trending");
    // console.log(Trending);
    // console.log("TopPicks");
    // console.log(TopPicks);

    const loggedInUser = "123";
    // // const guest = "guest";
    // const guest = "123";
    // let movies = Trending;
    // let trendingTitle = "Trending Now";
    // if (loggedInUser !== guest) {
    //     movies = TopPicks;
    //     trendingTitle = "Top Picks For " + loggedInUser;
    // }

    const formatted = (
        <>
            <div className="row bg-color">
                <div >
                    <NavigationTopBar />
                </div>
                <div >
                    <HomeBannerComponent />
                </div>
            </div>

            <div className="pb-3">
                <ul className="list-group wd-trending-bg-color">
                    <li className="list-group-item fw-bold fs-4">Trending Now</li>
                </ul>
                <BoxArtList movies={bookmarks} />
            </div>
            {/* <div className="pb-3">
                <ul className="list-group wd-trending-bg-color">
                    <li className="list-group-item fw-bold fs-4">Top Picks For User: {loggedInUser}</li>
                </ul>
                <BoxArtList movies={TopPicks} />
            </div> */}

            {/* <div className="pb-3">
                <ul className="list-group wd-trending-bg-color">
                    <li className="list-group-item fw-bold fs-4">{trendingTitle}</li>
                </ul>
                <BoxArtList movies={movies} />
            </div> */}


            <div className="wd-add-height-to-scroll">
            </div>
        </>

    )
    return (formatted);
}

export default HomePageComponent;



