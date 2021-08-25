import React from 'react';

function ViewToProtect({hi}) {
    return (
        <div>
            Protected
            <div className="hi">
                {hi}

            </div>
        </div>
    );
}

export default ViewToProtect;