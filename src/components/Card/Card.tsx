import React from 'react';
import check from '../../assets/images/check.svg'
import close from '../../assets/images/close.svg'

function Card(props: any) {
    return (
        <div className="bg-gray-300 text-gray-600 rounded flex justify-between w-[350px] p-2">
            <table>
                <tbody>
                    <tr>
                        <td className="min-w-[100px] font-bold">Title :</td>
                        <td>{props.title}</td>
                    </tr>
                    <tr>
                        <td className="min-w-[100px] font-bold">Description :</td>
                        <td>{props.description}</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-col justify-between items-center px-1">
                <img className="w-5 cursor-pointer" src={check} alt={props.index} onClick={props.toggleDoneTodo} title={props.isDone ? 'Mark as to do' : 'Mark as done'} style={props.isDone ? { filter: 'none' } : { filter: 'grayscale(100%)' }} />
                <img className="w-5 cursor-pointer" src={close} alt={props.index} onClick={props.removeTodo} title="Remove" />
            </div>
        </div>
    )
}

export default Card;