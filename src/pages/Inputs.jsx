import React from 'react'
import { motion } from 'framer-motion'

function Inputs() {
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

        <form className="bg-gray-50 shadow-xl w-3/4 mx-auto">
          <div>
            <div>
              <div className="text-center col-span-full mb-4">
                <h2 className="text-xl font-bold underline mb-4">
                  About the Hens
                </h2>
                <p>Give an approximation for the nuumber of eggs.</p>
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

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Cost of Coop ($)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="1200"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Time in Use (years)
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 block w-full"
                  type="number"
                  placeholder="5"
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
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default Inputs
