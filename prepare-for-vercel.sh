#!/bin/bash
# Script para preparar el proyecto para Vercel
# Ejecutar: bash prepare-for-vercel.sh

echo "🚀 Preparando proyecto para Vercel..."

# 1. Compilar TypeScript
echo "📦 Compilando TypeScript..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Error en la compilación. Corrige los errores y intenta de nuevo."
  exit 1
fi

echo "✅ Compilación exitosa"

# 2. Verificar dist
if [ ! -f "dist/main.js" ]; then
  echo "❌ dist/main.js no encontrado. Algo salió mal."
  exit 1
fi

echo "✅ dist/main.js generado correctamente"

# 3. Verificar .env.example existe
if [ ! -f ".env.example" ]; then
  echo "⚠️  .env.example no encontrado. Crea una copia manualmente."
fi

# 4. Mostrar resumen
echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║           ✅ PROYECTO LISTO PARA VERCEL                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "📋 Próximos pasos:"
echo "1. Sube tu código a GitHub:"
echo "   git add ."
echo "   git commit -m 'Prepare for Vercel deployment'"
echo "   git push origin main"
echo ""
echo "2. En Vercel Dashboard:"
echo "   - Import project from GitHub"
echo "   - Add Environment Variables:"
echo "     • ATLAS_STRCONNECT (tu MongoDB connection)"
echo "     • NODE_ENV=production"
echo "   - Click Deploy"
echo ""
echo "3. En MongoDB Atlas:"
echo "   - Network Access → Allow 0.0.0.0/0"
echo ""
echo "📚 Documentación:"
echo "   - Lee VERCEL_DEPLOYMENT.md para pasos detallados"
echo "   - Lee CHANGES_SUMMARY.md para ver qué cambió"
echo "   - Lee README.md para documentación general"
echo ""
echo "🎉 ¡Listo!"
