import Track from './Track';
import PropTypes from 'prop-types';

export default function TrackList({ tracks, onAdd, onRemove, isRemoval }) {
    try {
        return (
            <div className="TrackList">
                {tracks.map(track => <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />)}
            </div>
        );
    } catch (err) {
        console.error(err);
        return <div>Something went wrong</div>;
    }
}

TrackList.propTypes = {
    tracks: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    isRemoval: PropTypes.bool.isRequired
};
