import {useState} from 'react'


function ConfigFormComponent({planName, hangarData, index, handleHangarDataChange}) {
    const [editMode, setEditMode] = useState(false)
    
    return (
        <div className='container m-0'>
            <h2 className="text-primary text-2xl px-4 py-2 my-2 select-none">
                {planName} Instance {index}
            </h2>
            <div className='flex flex-col justify-center items-center p-4 shadow-lg bg-secondary rounded-md'>
                <div className='flex-auto flex flex-row mt-1 mb-3 w-full rounded-md shadow-md'>
                    <div className='flex-1 text-center bg-secondary text-md rounded-md inline-flex justify-center'>
                    <i className="fas fa-user mt-3 mb-2 ml-2 mr-2 text-primary"></i>
                    <input
                        type='text'
                        id={`${hangarData.id}-hangarid`}
                        name='hangarId'
                        placeholder='Hangar Id'
                        value={hangarData.hangarId}
                        onChange={(e) => handleHangarDataChange(e, hangarData.id)}
                        className='block w-full border-0 px-4 py-2 focus:outline-none'
                        required
                        disabled={!editMode}
                    />
                    </div>
                </div>
                <div className='flex-auto flex flex-row mt-1 mb-3 w-full rounded-md shadow-md'>
                    <div className='flex-1 text-center bg-secondary text-md rounded-md inline-flex justify-center'>
                    <i className="fas fa-key mt-3 mb-2 ml-2 mr-2 text-primary"></i>
                    <input
                        type='text'
                        id={`${hangarData.id}-hangarpin`}
                        name='hangarPin'
                        placeholder='Hangar Pin'
                        maxLength='4'
                        pattern='[0-9]{4}'
                        value={hangarData.hangarPin}
                        onChange={(e) => handleHangarDataChange(e, hangarData.id)}
                        className='block w-full border-0 px-4 py-2 focus:outline-none'
                        required
                        disabled={!editMode}
                    />
                    </div>
                </div>
                <div className='flex-auto flex flex-row mt-4'>
                    {editMode ? (<div className='text-center text-md'>
                        <button
                             onClick={() => {
                                setEditMode(!editMode)
                            }}
                            className='cursor-pointer p-2 rounded-md shadow-md focus:outline-none bg-primary text-secondary'>
                            <i className="fas fa-save mx-1"></i> Save
                        </button>
                    </div>) : (<div className='text-center text-md'>
                        <button
                            className='cursor-pointer p-2 rounded-md shadow-md focus:outline-none bg-primary text-secondary' onClick={() => setEditMode(!editMode)}>
                            <i className="fas fa-edit mx-1"></i> Edit
                        </button>
                    </div>)}
                </div>
                </div>
        </div>
    )
}

export default ConfigFormComponent
