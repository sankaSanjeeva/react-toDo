import React from 'react';

function Add(props: any) {

    return (
        <form className="flex flex-col" onSubmit={props.addTodo}>
            <div className="flex justify-between items-center">
                <label htmlFor="">Title:&nbsp;</label>
                <div className="w-[100px] p-1">
                    <input className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <label htmlFor="">Description:&nbsp;</label>
                <div className="w-[100px] p-1">
                    <input className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" />
                </div>
            </div>
            <div className="flex justify-center p-1">
                <input className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit" value="Add" />
            </div>
        </form>
    )
}

export default Add;