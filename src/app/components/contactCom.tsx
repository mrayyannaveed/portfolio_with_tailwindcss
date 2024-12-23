const ContactCom = () => {
    return(
        <div>
            <div className="h-[80vh] content-center">
            <h1 className="text-center text-4xl text-white font-bold">Contact Us</h1>
            <form className="rounded-xl p-2 bg-[#c3c7de] xl:w-[40%] lg:w-[55%]
            md:w-[65%] sm:w-[75%] w-[90%] m-auto mt-5">
                <label className="text-lg" htmlFor="name">Name: </label>
                <input className="w-[95%] m-2 p-1 rounded-sm "  type="text" placeholder="Enter Your Name" name="name" id="name" required/>
                <label className="text-lg" htmlFor="email">Email: </label>
                <input className="w-[95%] m-2 p-1 rounded-sm "  type="email" placeholder="Enter Your Email" name="email" id="email" required/>
                <label className="text-lg" htmlFor="message">Message: </label>
                <textarea className="w-[95%] m-2 p-1 rounded-sm " name="message" id="message" rows={4}></textarea>
                <div className="flex justify-end">
                <button className="bg-[#ffac1d] py-2 px-4 font-bold mt-5 rounded-xl hover:bg-[#fbcd7f]">Send</button>
                </div>
            </form>
            </div>
        </div>
    )
}


export default ContactCom