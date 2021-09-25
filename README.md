# Viking ship's gotta more and more powerful

## File directory structure

- viking/
  - READMD.md
  - node_modules/
  - package.json
  - tsconfig.json
  - src/
    - components/
      - Button/
        - button.tsx
        - button.test.tsx
        - style.scss(组件单独的样式)
    - styles/
      - _variables.scss(各种变量以及可配置设置)
      - _mixins.scss(全局 mixins)
      - _functions.scss(全局 functions)
    - index.tsx

## Component library style variable classification

- basic color system(基础色彩系统)
- font family system(字体系统)
- form(表单)
- button(按钮)
- outline and shadow(边框和阴影)
- configurable switch(可配置开关)

## Button attributes

```jsx
<Button
  size="lg"
  type="primary"
  disabled
  href=""?
  className=""?
  autoFocus=""?
  ...
>
  Viking Button
</Button>
```