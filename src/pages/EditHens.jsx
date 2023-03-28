import React from 'react'

function EditHens() {
  return (
    <div className="container mx-auto px-20">
      <div className="max-w-2xl mb-10 bg-white border border-gray-200 rounded-lg shadow m-auto">
        <img className="rounded-t-lg" src="./images/barred-rock1.jpg" alt="" />
        <div className="p-5">
          <form>
            <div className="flex flex-col text-left col-span-full mb-4">
              <label
                for="name"
                className="mb-2 text-2xl font-bold text-orange-700 block"
              >
                Name:
              </label>
              <input
                type="string"
                id="name"
                name="name"
                value="Abby"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
              ></input>
              <div className="grid grid-cols-2">
                <label for="dob">Date of Birth:</label>{' '}
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value="23/02/2021"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
                ></input>
                <label for="breed">Breed:</label>{' '}
                <input
                  type="string"
                  id="breed"
                  name="breed"
                  value="Barred Rock"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
                ></input>
                <label for="color">Colour:</label>{' '}
                <input
                  type="string"
                  id="colour"
                  name="colour"
                  value="Black and White"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
                ></input>
                <label for="feature">Identifying Feature:</label>{' '}
                <input
                  type="string"
                  id="feature"
                  name="feature"
                  value="Bent toe on left foot"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
                ></input>
                <label for="laying">Laying Status:</label>{' '}
                <select
                  id="laying"
                  name="laying"
                  value="Consistently"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
                >
                  <option>Consistently</option>
                  <option>Infrequent</option>
                  <option>Unsure</option>
                  <option>Point-of-Lay</option>
                  <option>Too Young</option>
                  <option>Not laying</option>
                </select>
                <label for="life">Life Status:</label>{' '}
                <select
                  id="life"
                  name="life"
                  value="Active"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
                >
                  <option>Active</option>
                  <option>Retired</option>
                  <option>Rehomed</option>
                  <option>RIP</option>
                </select>
                <label for="notes">Notes:</label>{' '}
                <textarea
                  id="notes"
                  name="notes"
                  value="Likes to hide in the far corner of the run"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 mb-5"
                ></textarea>
                <label for="image">New Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1"
                ></input>
                <div></div>
                <p className="mb-5 text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-full">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditHens
