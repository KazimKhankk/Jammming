import PropTypes from 'prop-types';

Track.propTypes = {
    track: PropTypes.shape({
        name: PropTypes.string,
        artist: PropTypes.string,
        album: PropTypes.string
    }).isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    isRemoval: PropTypes.bool.isRequired
};

function Track({ track, onAdd, onRemove, isRemoval }) {
    const { name, artist, album } = track;

    const handleAddTrack = () => {
        onAdd(track);
    };

    const handleRemoveTrack = () => {
        onRemove(track);
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{name}</h3>
                <p>
                    {artist} | {album}
                </p>
            </div>
            {isRemoval ? (
                <button className="Track-action" onClick={handleRemoveTrack}>
                    -
                </button>
            ) : (
                <button className="Track-action" onClick={handleAddTrack}>
                    +
                </button>
            )}
        </div>
    );
}

export default Track;

