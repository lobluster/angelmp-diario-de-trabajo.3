# Calculadora de IMC (Índice de Masa Corporal)

def calcular_imc(peso, altura):
    """Calcula el IMC a partir del peso (kg) y la altura (m)."""
    return peso / (altura ** 2)

def clasificar_imc(imc):
    """Clasifica el IMC en una categoría."""
    if imc < 18.5:
        return "Bajo peso"
    elif 18.5 <= imc <= 24.9:
        return "Normal"
    elif 25 <= imc <= 29.9:
        return "Sobrepeso"
    else:  # IMC >= 30
        return "Obesidad"

def mostrar_resultado(nombre, imc, categoria):
    """Muestra el resultado de forma clara."""
    print(f"Nombre: {nombre}")
    print(f"IMC: {imc:.2f}")
    print(f"Categoría: {categoria}")

nombre = "Juan"
peso = 75
altura = 1.75

imc = calcular_imc(peso, altura)
categoria = clasificar_imc(imc)
mostrar_resultado(nombre, imc, categoria)