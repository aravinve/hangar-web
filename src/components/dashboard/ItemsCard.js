function ItemsCard({itemsList}) {
    const menuArray = ["Explore", "Tools", "Social"]
    return (
        <div className='flex flex-col m-4'>
        {itemsList.map((item, index) => (
            <div key={index} className='flex flex-col justify-center rounded-md shadow-md px-4 py-2 my-2'>
                <h5 className="select-none text-center text-lg text-secondary bg-primary mx-1 my-2 py-1 px-2 rounded-sm">
                    <i className="fas fa-check-circle mx-1"></i> {menuArray[index]}
                </h5>
                <p className="mt-1 text-primary text-md inline-flex justify-center capitalize items-center select-none">
                    {item}
                </p>
            </div>
        ))}
        </div>
    )
}

export default ItemsCard
