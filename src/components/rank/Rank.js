import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className="db dim moon-gray f3">
                {`${name}, your current entry count is...`}
            </div>
            <div className="db dim moon-gray f1">
                {entries}
            </div>
        </div>
    );
}

export default Rank;