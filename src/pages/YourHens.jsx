import React from 'react'

function YourHens() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl pb-8 px-20 leading-relaxed font-semibold underline underline-offset-8 text-orange-700">
        The Hens in Your Flock
      </h1>
      <p className="text-xl px-20 pb-8">
        Keep track of all your hens here. Record their (approximate) birth date,
        characteristics and keep any notes about each hen.
      </p>
      <div className="text-lg px-20">
        <label htmlFor="display">Display:</label>{' '}
        <select
          id="display"
          name="display"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
        >
          <option>Active</option>
          <option>Retired</option>
          <option>Rehomed</option>
          <option>RIP</option>
          <option>All</option>
        </select>
        <label htmlFor="order" className="ml-5">
          Order By:
        </label>{' '}
        <select
          id="order"
          name="order"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
        >
          <option>Name</option>
          <option>Age</option>
          <option>Laying Status</option>
          <option>Life Status</option>
          <option>Breed</option>
        </select>
      </div>

      <div className="container grid grid-cols-3 mx-auto mb-20 ">
        <div className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <img
            className="rounded-t-lg"
            src="./images/barred-rock1.jpg"
            alt=""
          />
          <div className="p-5">
            <div className="flex">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-700 justify-start">
                Name: Abby
              </h5>{' '}
              <a href="/edithens">
                <i className="fa-regular fa-pen-to-square ml-3 hover:bg-orange-200 rounded text-orange-400"></i>
              </a>
            </div>

            <ul className="mb-3 font-normal text-gray-700">
              <li>Age: 2 Years</li>
              <li>Breed: Barred Rock</li>
              <li>Colour: Black and White</li>
              <li>Identifying Feature: Bent toe on left foot</li>
              <li>Laying Status: Consistently</li>
              <li>Life Status: Active</li>
              <li>Notes: Likes to hide in the far corner of the run</li>
            </ul>
          </div>
        </div>

        <div className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <img
            className="rounded-t-lg"
            src="./images/barred-rock2.jpg"
            alt=""
          />
          <div className="p-5">
            <div className="flex">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-700 justify-start">
                Name: Dorsey
              </h5>{' '}
              <a href="/edithens">
                <i className="fa-regular fa-pen-to-square ml-3 hover:bg-orange-200 rounded text-orange-400"></i>
              </a>
            </div>
            <ul className="mb-3 font-normal text-gray-700">
              <li>Age: 2 Years</li>
              <li>Breed: Barred Rock</li>
              <li>Colour: Black and White</li>
              <li>Identifying Feature: </li>
              <li>Laying Status: Consistently</li>
              <li>Life Status: Active</li>
              <li>Notes: Really likes strawberries</li>
            </ul>
          </div>
        </div>

        <div className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <img
            className="rounded-t-lg"
            src="./images/speckled-sussex1.jpg"
            alt=""
          />
          <div className="p-5">
            <div className="flex">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-700 justify-start">
                Name: Eagle
              </h5>{' '}
              <a href="/edithens">
                <i className="fa-regular fa-pen-to-square ml-3 hover:bg-orange-200 rounded text-orange-400"></i>
              </a>
            </div>
            <ul className="mb-3 font-normal text-gray-700">
              <li>Age: 2 Years</li>
              <li>Breed: Speckled Sussex</li>
              <li>Colour: Brown and White</li>
              <li>
                Identifying Feature: Has the most white of the speckled sussex
                hens
              </li>
              <li>Laying Status: Infrequently</li>
              <li>Life Status: Active</li>
              <li>Notes: The most friendly and will eat from hand</li>
            </ul>
          </div>
        </div>

        <div className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <img
            className="rounded-t-lg"
            src="./images/speckled-sussex2.jpg"
            alt=""
          />
          <div className="p-5">
            <div className="flex">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-700 justify-start">
                Name: Henny
              </h5>{' '}
              <a href="/edithens">
                <i className="fa-regular fa-pen-to-square ml-3 hover:bg-orange-200 rounded text-orange-400"></i>
              </a>
            </div>
            <ul className="mb-3 font-normal text-gray-700">
              <li>Age: 2 Years</li>
              <li>Breed: Speckled Sussex</li>
              <li>Colour: Brown and White</li>
              <li>Identifying Feature: Kind of a fluffy face</li>
              <li>Laying Status: Not laying</li>
              <li>Life Status: Active</li>
              <li>Notes: Gets stuck a lot</li>
            </ul>
          </div>
        </div>

        <div className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <img
            className="rounded-t-lg"
            src="./images/speckled-sussex3.jpg"
            alt=""
          />
          <div className="p-5">
            <div className="flex">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-700 justify-start">
                Name: Speckle
              </h5>{' '}
              <a href="/edithens">
                <i className="fa-regular fa-pen-to-square ml-3 hover:bg-orange-200 rounded text-orange-400"></i>
              </a>
            </div>
            <ul className="mb-3 font-normal text-gray-700">
              <li>Age: 2 Years</li>
              <li>Breed: Speckled Sussex</li>
              <li>Colour: Black and White</li>
              <li>Identifying Feature: Usually found in nest box</li>
              <li>Laying Status: Consistently</li>
              <li>Life Status: Active</li>
              <li>
                Notes: Sits in the nest boxes a lot. Prone to going clucky
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow mx-auto hover:border-orange-400 hover:border-4">
          <a href="/addhen">
            <img
              className="rounded-t-lg p-10"
              src="./images/chickeniconpic.jpg"
              alt=""
            />
            <div className="p-5 text-center mt-20">
              {/* <h5 className="my-10 text-2xl font-bold tracking-tight text-orange-700">
                Add a Hen
              </h5> */}
              <i className="fa-solid fa-plus text-8xl text-orange-400"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default YourHens
