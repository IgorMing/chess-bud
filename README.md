# Chess bud

Chess openings app to let you keen in the game.

## TODO List

- [ ] create an external component to show a list of content
- [ ] use the list component to render the data fetched from realtime database
- [ ] add condition to favorites screen toggling between auth/not auth

---

- [ ] uncomment the ads block before publishing the app

## Known erros

If you see this errors while building

```shell
1) That command depends on command in Target 'GoogleAppMeasurement' (project 'Pods'): script phase “[CP] Copy XCFrameworks”
2) That command depends on command in Target 'GoogleAppMeasurement-AdIdSupport' (project 'Pods'): script phase “[CP] Copy XCFrameworks”
```

Open the xCode, click on Pods, and check the targets. Delete the `GoogleAppMeasurement-AdIdSupport` one, and try it again. It must work, now.
