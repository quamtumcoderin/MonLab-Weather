# 🌦️ Dashboard Meteorológico Profesional

Aplicación web moderna para la visualización de datos meteorológicos en tiempo real, desarrollada con **React**, **TypeScript** y **Tailwind CSS**. Este proyecto está diseñado como un dashboard profesional, altamente escalable, accesible y optimizado.

---

## 🚀 Objetivo

Construir una interfaz atractiva y funcional que permita visualizar datos meteorológicos provenientes de un servidor MQTT en tiempo real, ofreciendo una experiencia de usuario clara, intuitiva y visualmente rica.

---

## 🧰 Stack Tecnológico

* **React** (con TypeScript)
* **Tailwind CSS**
* **MQTT (cliente JS)**
* Librerías de gráficos:

  * Recharts / Chart.js (o equivalente)

---

## 📡 Fuente de Datos

Los datos se reciben desde un servidor MQTT en formato JSON:

```json
{
  "pm1": 0,
  "pm25": 0,
  "pm10": 0,
  "uvs": 0,
  "als": 0,
  "temp": null,
  "pressure": null,
  "alt": null,
  "windspeed": 0
}
```

---

## 📊 Variables Meteorológicas

* **PM1 / PM2.5 / PM10** → Partículas en el aire
* **UVS** → Radiación ultravioleta
* **ALS** → Luz ambiental
* **Temp** → Temperatura
* **Pressure** → Presión atmosférica
* **Alt** → Altitud
* **Windspeed** → Velocidad del viento

---

## ⚙️ Funcionalidades

* 🔄 Conexión en tiempo real con servidor MQTT
* 📈 Actualización dinámica de datos
* ⚠️ Manejo de valores nulos (mostrar “Sin datos”)
* 📊 Visualización mediante gráficos interactivos
* 📱 Diseño responsive (mobile-first)
* 🌙 Modo claro / oscuro
* 🔁 Estados de carga y reconexión

---

## 🎨 Diseño y UX

* Estilo tipo **dashboard profesional**
* Uso de **cards** para cada métrica
* Jerarquía visual clara
* Animaciones suaves para actualización de datos
* Colores dinámicos según valores (ej: calidad del aire)

---

## 📊 Visualización de Datos

* Gráficos de líneas, barras o gauges
* Representación de tendencias
* Librerías recomendadas:

  * Recharts
  * Chart.js

---

## 🧩 Iconografía

Cada métrica debe estar acompañada de un icono representativo:

* 🌡️ Temperatura
* 🌬️ Viento
* ☀️ Radiación UV
* 🌫️ Calidad del aire
* 💡 Luz ambiental

Los iconos deben integrarse con el diseño visual general (no genéricos).

---

## ♿ Accesibilidad

* Uso de atributos ARIA
* Contraste adecuado
* Navegación por teclado
* Buenas prácticas de UX inclusivo

---

## 🏗️ Arquitectura del Proyecto

```
src/
│
├── components/   # UI reutilizable (cards, gráficos, layout)
├── hooks/        # Lógica reutilizable (MQTT, datos)
├── services/     # Cliente MQTT
├── types/        # Tipado TypeScript
├── pages/        # Vistas principales
├── utils/        # Funciones auxiliares
│
└── App.tsx
```

---

## 📦 Buenas Prácticas

* Tipado estricto con TypeScript
* Componentes desacoplados y reutilizables
* Hooks personalizados para lógica compleja
* Código limpio y organizado
* Optimización de renderizado

---

## ✨ Extras Deseables

* Indicadores visuales de calidad del aire
* Colores adaptativos según niveles de riesgo
* Históricos de datos
* Soporte para múltiples ubicaciones
* Animaciones avanzadas

---

## 🎯 Resultado Esperado

Una aplicación web:

* Profesional
* Visualmente atractiva
* Escalable y mantenible
* Capaz de mostrar datos meteorológicos de forma clara y comprensible

---

## 🛠️ Instalación (ejemplo)

```bash
npm install
npm run dev
```

---

## 📄 Licencia

MIT

---

## 👨‍💻 Autor

Proyecto diseñado como base para dashboards meteorológicos avanzados en tiempo real.
