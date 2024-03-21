/* eslint-disable no-console */
import { Collection } from 'signaldb'

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    console.warn('You should not import the "signaldb-devtools" package in your production environment')
  }

  Collection.enableDebugMode()

  console.log(`
  %cWelcome to SignalDB DevTools\n
  %cType 's' in your console and press Enter to get started.\n
  %cPS: You definitely shouldn't see this message in yout production environemnt.\nIf it is the case, please make sure that you only import the 'signaldb-devtools' package in your development environment
  `, 'font-size: 20px; font-weight: bold; color: #0367e9;', 'font-size: 16px; color: #0367e9;', 'font-size: 10px; color: #0367e9;')

  Object.defineProperty(window, 's', {
    enumerable: true,
    get() {
      console.log('SignalDB DevTools is ready to use. Type "s" in your console to get started')

      const devtools = Object.create(null)
      Object.defineProperty(devtools, 'collections', {
        get() {
          return Collection.collections.map((collection) => {
            const obj = Object.create(null)
            Object.defineProperty(obj, 'items', {
              get() {
                return collection.find().fetch()
              },
            })
            return obj
          })
        },
      })
      return devtools
    },
  })

  Object.defineProperty((window as any).s, 'inspect', {
    get() {
      console.log('INSPECT')
    },
  })
}

// Features:
// * List of all collections in the database. Allow querying and modification of the data
// * List of all present and past cursors. Show callstack of the cursor creation. Show query time
// * History of all changes made to the database. Allow to revert to a previous state. Allow grouping similar rows
// * Show potential optimizations. Queries that take too long. Show alerts if there are happen too many queries or modifications in a short period of time
