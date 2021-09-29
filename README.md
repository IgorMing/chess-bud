# Chess bud

Chess openings app to let you keen in the game.

## TODO List

- [x] create an external component to show a list of content
- [x] apply the UI on details screen w/ mocked data
- [x] show variants on an accordion component in the same screen
- [x] configure firestore and set the initial data there
- [ ] use the list component to render the data fetched from firestore
- [ ] add condition to favorites screen toggling between auth/not auth

---

- [ ] configure i18n library
- [ ] replace all hardcoded strings through the project with dynamic i18ned values
- [ ] uncomment the ads block before publishing the app

## Known erros

You'll see the error below right after running `npx pod-install`. I'd really appreciate to get how to avoid this build issue just changing something in `Podfile`, but I didn't dedicate time for it until now. _(I'm totally open for hints)_

```shell
1) That command depends on command in Target 'GoogleAppMeasurement' (project 'Pods'): script phase “[CP] Copy XCFrameworks”
2) That command depends on command in Target 'GoogleAppMeasurement-AdIdSupport' (project 'Pods'): script phase “[CP] Copy XCFrameworks”
```

Open the xCode, click on Pods, and check the targets. Delete the `GoogleAppMeasurement-AdIdSupport` one, and try it again. It must work, now.

---
