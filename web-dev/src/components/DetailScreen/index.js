import React, {useEffect, useState} from "react";
import {useParams, Navigate, useLocation} from "react-router-dom";
import NavigationTopBar from "../NavigationTopBar";
import CommentSection from "./comment-section";
import HeaderSection from "./header-section";
import SimilarItem from "./similar-item";
import {useAuth} from "../../contexts/auth-context";
import {getTitleDetail} from "../../services/title-service";
import AuthenticationLock from "../AuthenticationLock";

/**
 * Detail main screen
 *
 * @returns {JSX.Element}
 * @constructor
 */
const DetailScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState({status: "success", detail: null});
  const {getUserData} = useAuth();

  // Retrieve movie data from API based on IMDB ID
  const {movieId} = useParams()

  // Trigger IMDB movie detail API request if authenticated.
  useEffect(() => {
    if (getUserData()) {
      // Reset display position.
      window.scrollTo({top: 0});
      setLoading(true);

      // Send Title detail request
      getTitleDetail(movieId)
        // If perform get successfully, display results
        .then(response => {
          // Show detail
          setResult({status: "success", detail: response.data});
        })

        // If get fail, display error.
        .catch(error => {
          if (error.response) {
            if (error.response.status === 404) setResult({status: "success", detail: null});
            else setResult({...result, status: "server-fail"});
          } else if (error.request) {
            setResult({...result, status: "timeout"});
          }
        })
        .finally(() => void setLoading(false));
    }
  }, [movieId])

  const DetailLoadingBox = () => (
    <div className="flex-fill d-flex">
      <div className="m-auto search-loading-box">
        <h4 className="text-center mb-4">Loading...</h4>
        <div className="text-center">
          <i className="fa-solid fa-spinner fa-spin-pulse fa-10x"></i>
        </div>
      </div>
    </div>
  );

  const DetailResultBox = () => (
    <>
      {/* Header: title, plot, and poster */}
      <HeaderSection movie={result.detail} />

      {/* Trailer */}
      {result.detail.trailer &&
        <div className="w-100 mb-4">
          <h4>Trailer</h4>
          <div className="d-none d-md-block">
            <iframe width="544" height="306"
                    className="me-4"
                    src={result.detail.trailer + "?autoplay=false&width=544"}
                    title="Trailer video player"
                    frameBorder="no" scrolling="no" allowFullScreen></iframe>
          </div>

          <div className="d-block d-md-none">
            <iframe width="390" height="219"
                    className="me-4"
                    src={result.detail.trailer + "?autoplay=false&width=390"}
                    title="Trailer video player"
                    frameBorder="no" scrolling="no" allowFullScreen></iframe>
          </div>
        </div>}

      {/* Similar section */}
      <h4>Similar titles</h4>
      <div className="d-flex w-100 bg-light rounded-3 p-2 mb-4">
        <div className="d-flex overflow-auto pb-2 similar-section">
          {result.detail.similars && result.detail.similars.map(item => (<SimilarItem key={item._id} item={item} />))}
        </div>
      </div>

      {/* Comment section */}
      <CommentSection />
    </>
  );

  return (
    <AuthenticationLock>
      <div className="container d-flex flex-column vh-100">
        <NavigationTopBar />

        {/* Top padding for fixed navbar */}
        <div className="pt-5 pb-3"></div>

        {/* Display loading screen when loading movie detail */}
        {isLoading && <DetailLoadingBox />}

        {/* Display loading result */}
        {!isLoading &&
          <>
            {/* Display detail if succeed */}
            {result.status === "success" &&
              <>
                {!result.detail && <h2>Title not found</h2>}

                {result.detail && <DetailResultBox />}
              </>
            }

            {/* Error message if server fail */}
            {result.status === "server-fail" &&
              <h2>Gateway timeout: IMDB API server seem busy... Please try again.</h2>
            }

            {/* Display detail if request timeout */}
            {result.status === "timeout" &&
              <h2>Detail request timeout. Please try again.</h2>
            }
          </>
        }
      </div>
    </AuthenticationLock>
  );
}

export default DetailScreen;
