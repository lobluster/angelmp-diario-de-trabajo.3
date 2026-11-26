numero_secreto = 7
intentos = 0
max_intentos = 5

print("¡Adivina el número secreto!")
print(f"Tienes {max_intentos} intentos.")

while intentos < max_intentos:
    intento = int(input(f"Intento {intentos + 1}: Introduce un número: "))
    intentos += 1

    if intento == numero_secreto:
        print("¡Correcto!")
        break
    elif intento > numero_secreto:
        print("El número es menor")
    else:
        print("El número es mayor")
else:
    print("Perdiste")