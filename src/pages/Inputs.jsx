import React, { useState } from 'react'
import { filterProps, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Inputs(props) {
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    hens: '',
    eggs: '',
    food1freq: '',
    food1size: '',
    food1cost: '',
    food2: '',
    food2size: '',
    food2cost: '',
    food3: '',
    food3size: '',
    food3cost: '',
    food4: '',
    food4size: '',
    food4cost: '',
    food5: '',
    food5size: '',
    food5cost: '',
    bed1: '',
    bed1size: '',
    bed1cost: '',
    bed2: '',
    bed2size: '',
    bed2cost: '',
    bed3: '',
    bed3size: '',
    bed3cost: '',
    other1: '',
    other1cost: '',
    other2: '',
    other2cost: '',
  })

  function handleSubmit(event) {
    event.preventDefault()
    filterProps.changeInput(inputData)
    navigate('/Result')
  }
  console.log({ inputData })

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setInputData({ ...inputData, [name]: value })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-20"
    >
      <div>
        <h1 className="text-2xl font-bold mb-10 text-center">
          Fill in this form to calculate your backyard hens cost per egg.
        </h1>

        <form className="bg-gray-50 shadow-xl w-3/4 mx-auto p-10 mb-20 rounded-lg">
          <div>
            <div>
              <div className="text-center col-span-full mb-4">
                <h2 className="text-xl font-bold underline mb-4">
                  About the Hens
                </h2>
                <p>Give an approximation for the number of eggs.</p>
              </div>
              {/* First Other*/}
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Number of Hens
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                    type="number"
                    placeholder="8"
                    name="hens"
                    value={inputData.hens}
                    onChange={onChangeHandler}
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Average Eggs per Day
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                    type="number"
                    placeholder="2"
                    name="eggs"
                    value={inputData.eggs}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="text-center col-span-full mb-4">
              <h2 className="text-xl font-bold underline mb-4">Cost to Feed</h2>
              <p>
                Don't include kitchen or garden scraps as these are essentially
                free. Fill in as many rows as needed and leave the rest blank.
              </p>
            </div>
            {/* First Food */}
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Name of Food
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="string"
                  placeholder="Topflite Scratch & Lay"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Purchase Frequency (days)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="60"
                  name="food1freq"
                  value={inputData.food1freq}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Bag Size (kgs)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="20"
                  name="food1size"
                  value={inputData.food1size}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Cost ($)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="45.99"
                  name="food1cost"
                  value={inputData.food1cost}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            {/* Second Food */}
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Name of Food
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="string"
                  placeholder="Topflite Scratch & Lay"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Purchase Frequency (days)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="60"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Bag Size (kgs)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="20"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Cost ($)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="45.99"
                />
              </div>
            </div>
            {/* Third Food */}
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Name of Food
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="string"
                  placeholder="Topflite Scratch & Lay"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Purchase Frequency (days)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="60"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Bag Size (kgs)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="20"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Cost ($)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="45.99"
                />
              </div>
            </div>
            {/* Fourth Food */}
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Name of Food
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="string"
                  placeholder="Topflite Scratch & Lay"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Purchase Frequency (days)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="60"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Bag Size (kgs)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="20"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Cost ($)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="45.99"
                />
              </div>
            </div>
            {/* Fifth Food */}
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Name of Food
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="string"
                  placeholder="Topflite Scratch & Lay"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Purchase Frequency (days)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="60"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Bag Size (kgs)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="20"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Cost ($)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="45.99"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="text-center col-span-full mb-4">
              <h2 className="text-xl font-bold underline mb-4">
                Cost to House
              </h2>
              <p>Fill in as many rows as needed and leave the rest blank.</p>
            </div>
            {/* First House */}
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Name of Bedding
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="string"
                  placeholder="Wood Shavings"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Purchase Frequency (days)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="120"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Size (kgs)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="19"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Cost ($)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="26.95"
                />
              </div>
            </div>
            {/* Second House */}
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Name of Bedding
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="string"
                  placeholder="Wood Shavings"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Purchase Frequency (days)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="120"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Size (kgs)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="19"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Cost ($)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="26.95"
                />
              </div>
            </div>
            {/* Third House */}
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Name of Bedding
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="string"
                  placeholder="Wood Shavings"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Purchase Frequency (days)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="120"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Size (kgs)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="19"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Cost ($)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="26.95"
                />
              </div>
            </div>

            <div>
              <div className="text-center col-span-full mb-4">
                <h2 className="text-xl font-bold underline mb-4">
                  Other Costs
                </h2>
                <p>
                  Fill in as many rows as needed and leave the rest blank. There
                  may be other costs that this form does not take into account.
                </p>
              </div>
              {/* First Other*/}
              <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                    type="string"
                    placeholder="Special Suppliment"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Purchase Frequency (days)
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                    type="number"
                    placeholder="365"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Cost ($)
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                    type="number"
                    placeholder="60"
                  />
                </div>
              </div>
              {/* Second Other*/}
              <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                    type="string"
                    placeholder="Special Suppliment"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Purchase Frequency (days)
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                    type="number"
                    placeholder="365"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Cost ($)
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                    type="number"
                    placeholder="60"
                  />
                </div>
              </div>
            </div>
            <p className="mb-5">
              Note: This form does not cover all costs of raising backyard
              chickens. It does not take into account the initial set-up costs
              (costs to purchase the hens, buy a coop, set-up the coop, purchase
              feed and water conatiner, fencing etc) and also does not take into
              account time/effort involved in looking after hens such as
              cleaning, feeding, refilling water.
            </p>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Calculate
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Inputs
