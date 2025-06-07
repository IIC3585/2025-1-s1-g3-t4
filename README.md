# 2025-1-s1-g3-t4

# Ejecutar el codigo

Para ejecutar el código, primero se deben instalar las dependencias ejecutando:
```bash
npm install
```

Luego, se visualiza ejecutando:
```bash
npm run dev
```

# Suscripción Item Web Component

Nota: para ambos estilos, el componente recibe los atributos:

- `titulo`
- `visitas`
- `precio`
- `precio-final`
- `descripcion`
- `features` 

## Versión Estándar (`suscripcion.js`)

- `Custom Elements`: se define una clase que extiende de `HTMLElement`.
- `Shadow DOM`: encapsula el estilo y contenido con `attachShadow({ mode: 'open' })`.
- `Template HTML`: se usa un `<template>` para definir la estructura del componente.
- `attributeChangedCallback()`: observa atributos y reacciona a sus cambios.

## Versión con Lit (`suscripcionLit.js`)
- Utiliza `LitElement`, `html` y `css` desde la librería `lit`.
- Declara las propiedades reactivas en `static properties`.
- Usa `static styles` para encapsular los estilos.
- Renderiza contenido con funciones `html\`.
- Usa `updated()` para transformar el atributo `features` si viene como string.

# Acordeón Item Web Component

Nota: para ambos estilos, el componente recibe los atributos:

- `titulo`
- `contenido`


## Versión Estándar (`acordion.js`)

- `Custom Elements`: se define una clase que extiende de `HTMLElement`.
- `Shadow DOM`: encapsula el estilo y contenido con `attachShadow({ mode: 'open' })`.
- `Template HTML`: se usa un `<template>` para definir la estructura del componente.
- `Slots nombrados`: se usan para insertar contenido (`slot name="titulo"` y `slot name="contenido"`).
- `Cierre automatico`: al abrir un acordeón, se cierran los demás mediante un `toggle` listener que recorre todos los componentes activos en la página. **Importante:** El cierre automatico fue comentado para poder añadir la anidación de acordeones o `slots`.



## Versión con Lit (`acordionLit.js`)
- Utiliza `LitElement`, `html` y `css` desde la librería `lit`.
- `Propiedades reactivas`: `titulo` y `abierto` se declaran como propiedades.
- `Estilos encapsulados`: definidos en `static styles`.
- Renderiza contenido con funciones `html\`.
- `Control de apertura`: el componente despacha internamente el cierre de los otros acordeones usando `document.querySelectorAll()` en `toggle`. **Importante:** El cierre automatico fue comentado para poder añadir la anidación de acordeones o `slots`.


# Recursos consultados:
Para ambas partes se visitaron repositorios del curso correspondientes al 2024, para entender mejor el flujo de como se desarrollaban los componentes, específicamente los repositorios visitados fueron del grupo 1, 5 y 7.


## Web Component Standar
- https://eisenbergeffect.medium.com/hello-web-components-795ed1bd108e
- https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_shadow_DOM
- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM

## Lit Element
- https://codelabs.developers.google.com/codelabs/the-lit-path?hl=es-419#8

