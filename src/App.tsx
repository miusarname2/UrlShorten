import React, { useState } from "react";

export default function App() {
  const [linkToShort, setLinkToShort] = useState<string|null>("");
  const mockResp =()=>{
    alert("This is an a fake we dont have a counts")
  }
  const changeState = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setLinkToShort(e.target.value);
    console.log(linkToShort);
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto max-w-4xl p-5">
          <h1 className="text-center font-bold text-3xl text-gray-800">
            Short URL
          </h1>
          <div className="mt-10 rounded-md bg-white p-8 shadow-lg">
            <h2 className=" font-semibold">
              Paste the URL to be shortened
            </h2>
            <div  className="mt-4 flex">
              <input
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                placeholder="Enter the link here"
                onChange={changeState}
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background tfocus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-2">
                Shorten URL
              </button>
            </div>
            <p className="mt-4  text-gray-600">
              ShortURL is a free tool to shorten URLs and generate short links
              URL shortener allows to create a shortened link making it easy to
              share
            </p>
          </div>
          <div className="mt-8 rounded-md bg-blue-100 p-8 shadow-lg">
            <h2 className=" font-semibold">
              Want More? Try Premium Features!
            </h2>
            <p className="mt-2  text-gray-600">
              Custom short links, powerful dashboard, detailed analytics, API,
              UTM builder, QR codes, browser extension, app integrations and
              support
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mt-4" onClick={mockResp}>
              Create Account
            </button>
          </div>
          <div className="mt-8 text-center">
            <h2 className=" font-semibold">
              Simple and fast URL shortener!
            </h2>
            <p className="mt-4  text-gray-600">
              ShortURL allows to shorten long links from Instagram, Facebook,
              YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.
              Just paste the long URL and click the Shorten URL button. On the
              next page, copy the shortened URL and share it on sites, chat and
              emails. After shortening the URL, check how many clicks it
              received.
            </p>
            <h3 className="mt-8  font-semibold">
              Shorten, share and track
            </h3>
            <p className="mt-2  text-gray-600">
              Your shortened URLs can be used in publications, documents,
              advertisements, blogs, forums, instant messages, and other
              locations. Track statistics for your business and projects by
              monitoring the number of hits from your URL with our click
              counter.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-gray-700"
                >
                  <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" />
                </svg>
                <p className="mt-2  font-semibold">Easy</p>
                <p className="mt-1  text-gray-600">
                  ShortURL is easy and fast, enter the long link to get your
                  shortened link
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-gray-700"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                  <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                  <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                  <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                </svg>
                <p className="mt-2  font-semibold">Shortened</p>
                <p className="mt-1  text-gray-600">
                  Use any link, no matter what size, ShortURL always shortens
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-gray-700"
                >
                  <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <p className="mt-2  font-semibold">Secure</p>
                <p className="mt-1  text-gray-600">
                  It is fast and secure, our service has HTTPS protocol and data
                  encryption
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-gray-700"
                >
                  <line x1={12} x2={12} y1={20} y2={10} />
                  <line x1={18} x2={18} y1={20} y2={4} />
                  <line x1={6} x2={6} y1={20} y2={16} />
                </svg>
                <p className="mt-2  font-semibold">Statistics</p>
                <p className="mt-1 text-gray-600">
                  Keep track of your links
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-gray-700"
                >
                  <path d="M4 20h16" />
                  <path d="m6 16 6-12 6 12" />
                  <path d="M8 12h8" />
                </svg>
                <p className="mt-2  font-semibold">Reliable</p>
                <p className="mt-1  text-gray-600">
                  All your shortened links in one place
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-gray-700"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                <p className="mt-2  font-semibold">Devices</p>
                <p className="mt-1  text-gray-600">
                  Compatible with all devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
