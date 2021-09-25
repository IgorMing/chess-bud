# Chess bud

Chess openings app to let you keen in the game.

## TODO List

- [x] configure admob
- [x] design _(in hands)_ how the design will look like, and about all features
- [x] choose a UI toolkit and add it
  - think between NativeBase, React Native Elements and RN UI Kitten
- [ ] add firebase authentication
- [ ] uncomment the ads block before publishing the app

## Known erros

If you see this errors while building

```shell
1) That command depends on command in Target 'GoogleAppMeasurement' (project 'Pods'): script phase “[CP] Copy XCFrameworks”
2) That command depends on command in Target 'GoogleAppMeasurement-AdIdSupport' (project 'Pods'): script phase “[CP] Copy XCFrameworks”
```

Open the xCode, click on Pods, and check the targets. Delete the `GoogleAppMeasurement-AdIdSupport` one, and try it again. It must work, now.
