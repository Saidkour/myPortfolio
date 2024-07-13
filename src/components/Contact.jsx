import { CONTACT } from "../constants"

function Contact() {
  return (
    <div className="pt-[100px] px-5 container m-auto pb-10">
      <div className="text-center p-2">
        <h2 className="text-5xl  opacity-85">Get in Touch</h2>
      </div>
      <div className="text-center tracking-tighter">
          <p className="my-4 ">{CONTACT.address}</p>
          <p className="my-4 ">{CONTACT.phoneNo}</p>
          <p>
            <a href="" className="border-b">
                {CONTACT.email}
            </a>
          </p>
      </div>
    </div>
  )
}

export default Contact