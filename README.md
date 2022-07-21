# Chess bud

Chess openings app to let you keen in the game.

## How are the things looking?

|                                                          |                                                          |                                                                |
| :------------------------------------------------------: | :------------------------------------------------------: | -------------------------------------------------------------- |
|     ![List screen](./assets/list.png 'List screen')      | ![Details screen](./assets/details.png 'Details screen') | ![Favorites screen](./assets/favorites.png 'Favorites screen') |
| ![Profile screen](./assets/profile.png 'Profile screen') |  ![Details screen](./assets/signin.png 'Signin screen')  | ![Signup screen](./assets/signup.png 'Signup screen')          |

## TODO List

- [x] create an external component to show a list of content
- [x] apply the UI on details screen w/ mocked data
- [x] show variants on an accordion component in the same screen
- [x] modify header UI
- [x] configure firestore and set the initial data there
- [x] use the list component to render the data fetched from firestore
- [x] configure firebase storage
- [x] store images on firebase storage
- [x] add condition to use the cloud storage image name or a direct uri link
- [x] fetch variants data from a nested firestore collection
- [x] configure i18n library
- [x] replace all hardcoded strings through the project with dynamic i18ned values
- [x] fetch `variants` data from firestore
- [x] add condition to favorites screen toggling between auth/not auth
- [x] create bookmark icon to details screen
- [x] move the signin logic to a reducer
- [x] store bookmark data on firestore _(hint: create a new collection called `users`, having documents by `user.uid` as key, with the fields: bookmarks, lichessUser and chessdotcomUser for this moment.)_
- [x] fetch favorites only
- [x] create a component for empty favorites results
- [x] create couple more openings _(for testing the favorites screen behavior properly)_
- [x] add input fields for signin/signup
- [x] make the focus move to next fields with ref API
- [x] improve profile screen with user's data
- [x] fetch variants board images from cloud storage after details screen loads
- [x] add proper app icons
- [x] add a splash screen
- [x] publish it!

---

_TODO on next_

- [ ] check/improve offline behavior
- [ ] go to root screen after double clicking the navigator icon
- [ ] add analytics
- [ ] uncomment the ads block before publishing the app
- [ ] get focused on adding new content

---

_Less priority_

- [ ] move all firebase calls to `modules` files
- [ ] import string dictionary from realtime database

---

_Feature: New screen to add new content_

- [ ] create a screen which provides a way to add new openings to the app _(initially we can hardcode our own user for have access to the screen. Re-check if worth to do this)_
- [ ] configure remote config
- [ ] fetch allowed users for add and edit openings and variants

_Feature: save Lichess and chess.com users_

- [ ] move lichess and chess.com user values to user's reducer
- [ ] create the profile screen with data about the user _(lichess, chess.com users)_
- [ ] save both users on firestore
- [ ] fetch both users on login, after getting the user uid

## Known erros

You'll see the error below right after running `npx pod-install`. I'd really appreciate to get how to avoid this build issue just changing something in `Podfile`, but I didn't dedicate time for it until now. _(I'm totally open for hints)_

```shell
1) That command depends on command in Target 'GoogleAppMeasurement' (project 'Pods'): script phase “[CP] Copy XCFrameworks”
2) That command depends on command in Target 'GoogleAppMeasurement-AdIdSupport' (project 'Pods'): script phase “[CP] Copy XCFrameworks”
```

Open the xCode, click on Pods, and check the targets. Delete the `GoogleAppMeasurement-AdIdSupport` one, and try it again. It must work, now.

---
