

function AppConfigComponent({onConfigBack}) {
    return (
        <>
        <div className="m-2 py-2 px-4 focus:outline-none">
            <div className="flex-1 mt-1 mb-2">
                <span className="cursor-pointer text-secondary underline text-base" onClick={onConfigBack}>
                    Cancel
                </span>
            </div>
          <div className="flex-1 mt-2 mb-2">
            <h3 className="text-secondary text-4xl">
                    App Config
                </h3>
          </div>
        </div>
        </>
    )
}

export default AppConfigComponent
