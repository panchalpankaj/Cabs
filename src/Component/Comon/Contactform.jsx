

 const ContactForm = () => {
    return(
        <>
            <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                <div className="flex flex-col">
                <label>First Name</label>
                <input type="text" className="border-2 rounded-lg border-gray-800 p-1"></input>
                </div >
                <div className="flex flex-col">
                <label>Last Name</label>
                <input type="text" className="border-2 rounded-lg border-gray-800 p-1"></input>
                </div>
                </div>
                <label>Email</label>
                <input type="email" className="border-2 rounded-lg border-gray-800 p-1"></input>
                <label>Mobile No</label>
                <input type="text" className="border-2 rounded-lg border-gray-800 p-1"></input>
                <label>Comment Message</label>
                <textarea type="text" rows={4} className="border-2 rounded-lg border-gray-800 p-1">
                </textarea>
                <button type="submit" className="bg-lime-500 p-1 text-white w-1/3  justify-center rounded-lg ml-32">Submit</button>
            </div>
        </>
    )
}

export default ContactForm