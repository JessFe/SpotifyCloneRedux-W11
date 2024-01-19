import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToPlaylist, removeFavourite, removeFromPlaylist, setLoadedSong } from "../redux/reducers/stateReducer";
import { addFavourite } from "../redux/reducers/stateReducer";

function Card(props) {
  const favourite = useSelector((state) => state.global.favourite) || [];
  const playlist = useSelector((state) => state.global.playlist) || [];
  const dispatch = useDispatch();

  return (
    <div className="col text-center d-flex justify-content-center " id={props.songInfo.id}>
      <div className="position-relative MyImgWrapper">
        <img className="img-fluid" src={props.songInfo.album.cover_medium} alt="track" />
        <i
          className="bi bi-play-circle-fill fs-3  text-success position-absolute rad-gradient"
          onClick={() => dispatch(setLoadedSong(props.songInfo))}
        ></i>
        {favourite.includes(props.songInfo.id) ? (
          <i
            className="bi bi-chat-heart-fill heart fs-3 text-danger position-absolute rad-gradient"
            onClick={() => dispatch(removeFavourite(props.songInfo.id))}
          ></i>
        ) : (
          <i
            className="bi bi-chat-heart heart fs-3 text-danger position-absolute rad-gradient"
            onClick={() => dispatch(addFavourite(props.songInfo.id))}
          ></i>
        )}
        {playlist.some((song) => song.id === props.songInfo.id) ? (
          <i
            className="bi bi-dash-circle-fill position-absolute playlist fs-3 text-primary text-opacity-75 rad-gradient"
            onClick={() => dispatch(removeFromPlaylist(props.songInfo))}
          ></i>
        ) : (
          <i
            className="bi bi-plus-circle-fill position-absolute playlist fs-3 text-primary text-opacity-75 rad-gradient"
            onClick={() => dispatch(addToPlaylist(props.songInfo))}
          ></i>
        )}

        <p className="songText">
          Track:{" "}
          {props.songInfo.title.length < 16 ? `${props.songInfo.title}` : `${props.songInfo.title.substring(0, 16)}...`}
          <br />
          Artist: {props.songInfo.artist.name}
        </p>
      </div>
    </div>
  );
}

export { Card };
