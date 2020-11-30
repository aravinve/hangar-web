import connect from './images/connect.svg'

function Footer({isShowMenu}) {
    return (
        <>
        {isShowMenu ? (<><div className="w-100 bg-secondary" id="connect">
            <div className="lg:flex lg:flex-row md:flex-row sm:flex-col items-center p-8 justify-items-center text-center">
                <div className="flex-1">
                    <h2 className="select-none text-4xl my-4 text-primary">
                        CONNECT NOW
                    </h2>
                    <h4 className="text-lg text-primary mt-2 mb-6">Reach us @</h4>
                    <a href="#" className="flex-shrink-0 bg-primary cursor-pointer text-secondary text-base py-2 px-4 rounded-md shadow-md hover:bg-blue-900 focus:outline-none mr-2">
                        <i className='fab fa-facebook'></i>
                    </a>
                    <a href="#" className="flex-shrink-0 bg-primary cursor-pointer text-secondary text-base py-2 px-4 rounded-md shadow-md hover:bg-blue-900 focus:outline-none mr-2">
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href="#" className="flex-shrink-0 bg-primary cursor-pointer text-secondary text-base py-2 px-4 rounded-md shadow-md hover:bg-blue-900 focus:outline-none mr-2">
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href="#" className="flex-shrink-0 bg-primary cursor-pointer text-secondary text-base py-2 px-4 rounded-md shadow-md hover:bg-blue-900 focus:outline-none mr-2">
                        <i className='fab fa-github'></i>
                    </a>
                    <h4 className="text-lg text-primary mt-6 mb-4">Report An Issue</h4>
                    <a href="#" className="flex-shrink-0 bg-primary cursor-pointer text-secondary text-base py-2 px-4 rounded-md shadow-md hover:bg-blue-900 focus:outline-none mr-2">
                    <i className='fas fa-flag'></i> Report
                    </a>
                </div>
                <div className="flex-1 p-2 mt-2">
                    <img src={connect} alt="About Drop" className="w-full h-80"/>
                </div>
            </div>
        </div>
        <div className="w-100 bg-primary h-10">
            <div className="p-2 text-white text-sm">
            &copy; Copyrights Reserved 2020
            </div>
        </div></>) : (<div className="w-full bg-primary h-12 fixed bottom-0">
            <div className="py-1 mt-2 text-white text-sm float-right">
                    <a href="#" className="flex-shrink-0 bg-secondary rounded-md cursor-pointer text-primary text-base py-1 px-2 mr-2">
                        <i className='fab fa-facebook'></i>
                    </a>
                    <a href="#" className="flex-shrink-0 bg-secondary rounded-md cursor-pointer text-primary text-base py-1 px-2 mr-2">
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href="#" className="flex-shrink-0 bg-secondary rounded-md cursor-pointer text-primary text-base py-1 px-2 mr-2">
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href="#" className="flex-shrink-0 bg-secondary rounded-md cursor-pointer text-primary text-base py-1 px-2 mr-2">
                        <i className='fab fa-github'></i>
                    </a>
            </div>
        </div>)}
        </>
    )
}

export default Footer
