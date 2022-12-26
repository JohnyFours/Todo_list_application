import React from 'react';

const UpdateTask = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <input className="form-control form-control-lg"
                        onChange={(e) => changeTask(e)}
                        value={updateData && updateData.title} />
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-lg btn-success mr-20"
                        onClick={updateTask}>
                        Update
                    </button>
                    <button className="btn btn-lg btn-warning"
                        onClick={cancelUpdate}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
};

export default UpdateTask;
