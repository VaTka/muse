/* eslint-disable */

import {SongBar} from "./index";

const RelatedSongs = ({data, isPlaing, activeSong, handlePauseClick, handlePlayClick, artistId}) => (
    <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
        <div className="mt-6 w-full flex flex-col">
            {data?.map((song, i) => (
                <SongBar
                    key={`${song.key}-${artistId}`}
                    song={song}
                    i={i}
                    artistId={artistId}
                    isPlaying={isPlaing}
                    activeSong={activeSong}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                />

            ))}
        </div>
    </div>
);

export default RelatedSongs;
