# ✅ Checklist de Deployment en Vercel

Sigue estos pasos para desplegar tu aplicación en Vercel:

## 1. 🔧 Pre-Deployment (Local)

- [ ] Compilar localmente: `npm run build`
- [ ] Verificar que no hay errores de TypeScript
- [ ] Confirmar que `dist/main.js` existe y es válido
- [ ] Verificar que `.gitignore` incluye `node_modules`, `.env`, y `dist`

## 2. 📤 Git Setup

- [ ] Crear cuenta en GitHub (si no la tienes)
- [ ] Subir el código a GitHub:
  ```bash
  git add .
  git commit -m "Prepare for Vercel deployment"
  git push origin main
  ```

## 3. 🚀 Vercel Setup

- [ ] Ir a [vercel.com](https://vercel.com)
- [ ] Hacer login o crear cuenta
- [ ] Click en "Add New" → "Project"
- [ ] Seleccionar tu repositorio de GitHub
- [ ] Click "Import"

## 4. ⚙️ Configurar Variables de Entorno en Vercel

En el panel de Vercel:
1. Ve a "Settings" → "Environment Variables"
2. Agrega:
   - **Nombre**: `ATLAS_STRCONNECT`
     **Valor**: Tu URL de conexión de MongoDB Atlas (ejemplo: `mongodb+srv://user:pass@cluster.mongodb.net/db?retryWrites=true&w=majority`)
   - **Nombre**: `NODE_ENV`
     **Valor**: `production`

### Obtener tu URL de MongoDB Atlas:
1. Ir a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Conectar a tu cluster
3. Click en "Connect"
4. Seleccionar "Drivers"
5. Copiar la URL de conexión
6. Reemplazar `<username>` y `<password>`

## 5. 🌐 MongoDB Atlas Whitelist

MongoDB necesita que autorices conexiones desde Vercel:

1. En MongoDB Atlas → "Security" → "Network Access"
2. Click en "Add IP Address"
3. Seleccionar "Allow access from anywhere" (0.0.0.0/0)
   - ⚠️ Nota: En producción, considera usar VPC para mayor seguridad
4. Confirmar cambios

## 6. 🚀 Deploy

- [ ] En Vercel Dashboard, click "Deploy"
- [ ] Esperar 2-5 minutos
- [ ] Verificar que el status es "Ready"

## 7. ✨ Test de Producción

Una vez deployado:

```bash
# Reemplaza tu-proyecto con tu URL de Vercel
export URL=https://tu-proyecto.vercel.app

# Health check
curl $URL/

# Crear URL acortada
curl -X POST $URL/link \
  -H "Content-Type: application/json" \
  -d '{"link":"https://example.com/very/long/url"}'

# Ver todas las URLs
curl $URL/link
```

## 8. 🐛 Troubleshooting

### Problema: "Module not found"
```
✅ Solución: 
- Asegurar extensiones .js en imports: 
  import { foo } from "./path/file.js"
```

### Problema: "Cannot find MongoDB connection"
```
✅ Solución:
- Verificar ATLAS_STRCONNECT en Environment Variables
- Redeploy después de cambiar variables:
  git commit --allow-empty -m "Redeploy"
  git push
```

### Problema: "MongoDB timeout or connection refused"
```
✅ Solución:
- Verificar IP whitelist en MongoDB Atlas (debe ser 0.0.0.0/0)
- Verificar credenciales en ATLAS_STRCONNECT
- Probar conexión localmente primero
```

### Problema: "Timeout after 60 seconds"
```
✅ Solución:
- La conexión a MongoDB está lenta
- Verificar que MongoDB Atlas está activo
- Considerar usar MongoDB pooling (ya configurado)
```

### Ver logs en Vercel:
1. Vercel Dashboard → Tu proyecto
2. Click en la última deployment
3. Tab "Function Logs"
4. Ver errores en tiempo real

## 9. 📊 Monitoreo Continuo

- [ ] Verificar logs regularmente en Vercel
- [ ] Configurar alertas de errores
- [ ] Monitorear uso de CPU y memoria

## 🎉 ¡Listo!

Tu backend está deployado y funcionando en Vercel. 
URL: `https://tu-proyecto.vercel.app`

### Próximos pasos:
1. Configurar dominio personalizado (opcional)
2. Configurar alertas en Vercel
3. Conectar frontend (si lo tienes)
4. Configurar CI/CD automático

---

**Tip**: Cada vez que hagas push a `main`, Vercel automáticamente desplegará los cambios.

Para deployar a una rama diferente:
1. Ve a "Settings" → "Git"
2. Cambiar "Production Branch" o agregar "Preview Deployments"
