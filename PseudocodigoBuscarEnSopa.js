Algoritmo BuscarEnSopa:
    SopaDeLetras=read(input_search.txt);
    solicitarPalabra()
        letraSopaActual=SopaDeLetras.address;
        print("Ingrese la nueva palabra que desea buscar y oprima la tecla Enter:");
        read palabra;
        palabraSize=0;
        letraPalabraActual=palabra.address;
        while(letraPalabraActual!=10){
            letraPalabraActual++;
            palabraSize++;
        }
        letraPalabraActual=palabra.address;
        contadorPalabra = 1
        indiceCol = 0
        indiceRow = 0
        if(50>=palabraSize){
            if(1<=palabraSize){
                hagaloopIzqDer() {
                    while (contadorPalabra < palabraSize) {
                        if( letraPalabraActual == letraSopaActual){
                            letraPalabraActual++;
                            contadorPalabra++;
                            indiceCol++;
                            if(contadorPalabra > palabraSize){
                                indiceRow++;
                                indiceRow-=contadorPalabra-2
                                print("Felicidades la palabra fue encontrada de Izquierda a Derecha, y las coordenadas son: Fila "+indiceRow+" y columna "+indiceCol);
                                return solicitarPalabra();
                            }
                            if(indiceCol > 49){
                                indiceRow++;
                                if(indiceRow>=49){
                                    startLoopDerIzq();
                                }
                                indiceCol = 0;
                                letraSopaActual +=  3; // Hacer salto de linea en la sopa de letras
                                letraPalabraActual = letraPalabraActual - (contadorPalabra-1)
                                contadorPalabra = 1
                                return hagaloopIzqDer()
                            }
                            letraSopaActual += 2
                        }else{
                            if(indiceCol < 49){
                                if(contadorPalabra==1){
                                    letraSopaActual += 2 
                                    indiceCol++
                                    return hagaloopIzqDer()
                                }
                                if(contadorPalabra>1){
                                    if(contadorPalabra>2){
                                        letraSopaActual-=2
                                        indiceCol-=1
                                    }
                                    letraSopaActual-=contadorPalabra
                                    contadorPalabra=1
                                }
                            }
                            else{
                                if(indiceCol==49){
                                    if(indiceRow==49){
                                        startLoopDerIzq();
                                    }
                                    if(indiceRow<50){
                                        indiceRow+=1
                                        indiceCol=0
                                        letraSopaActual +=  3 // Hacer salto de linea en la sopa de letras
                                        letraPalabraActual = letraPalabraActual - (contadorPalabra-1)
                                        contadorPalabra = 1
                                    }
                                }
                            }
                        }
                    }
                    startLoopDerIzq(){
                        contadorPalabra = 1
                        indiceCol = 49
                        indiceRow = 49
                        hagaloopDerIzq(){
                            while (contadorPalabra < palabraSize){
                                if( letraPalabraActual == letraSopaActual){
                                    letraPalabraActual++;
                                    contadorPalabra++;
                                    indiceCol--;
                                    if(contadorPalabra > palabraSize){
                                        indiceRow++
                                        indiceCol+=contadorPalabra
                                        print("Felicidades la palabra fue encontrada de Derecha a Izquierda, y las coordenadas son: Fila "+indiceRow+" y columna "+indiceCol);
                                        return solicitarPalabra();
                                    }
                                    if(indiceCol < 0){
                                        indiceRow--;
                                        if(indiceRow < 0){
                                            startLoopArrAbj();
                                        }
                                        indiceCol = 0;
                                        letraSopaActual -=  3; // Hacer salto de linea en la sopa de letras
                                        letraPalabraActual = letraPalabraActual - (contadorPalabra-1)
                                        contadorPalabra = 1
                                        return hagaloopDerIzq()
                                    }
                                    letraSopaActual -= 2
                                }else{
                                    if(indiceCol > 0){
                                        if(contadorPalabra==1){
                                            letraSopaActual -= 2 
                                            indiceCol--
                                            return hagaloopDerIzq()
                                        }
                                        if(contadorPalabra>1){
                                            if(contadorPalabra>2){
                                                letraSopaActual+=2
                                                indiceCol+=1
                                            }
                                            letraSopaActual-=(contadorPalabra-1)
                                            contadorPalabra=1
                                        }
                                    }
                                    else{
                                        if(indiceCol==0){
                                            if(indiceRow==0){
                                                startLoopArrAbj();
                                            }
                                            if(indiceRow<0){
                                                indiceRow+=1
                                                indiceCol=49
                                                letraSopaActual -=  3 // Hacer salto de linea en la sopa de letras
                                                letraPalabraActual = letraPalabraActual - (contadorPalabra-1)
                                                contadorPalabra = 1
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    startLoopArrAbj(){
                        contadorPalabra = 1
                        indiceCol = 0
                        indiceRow = 0
                        hagaloopArrAbj(){
                            while (contadorPalabra < palabraSize){
                                if( letraPalabraActual == letraSopaActual){
                                    letraPalabraActual++;
                                    contadorPalabra++;
                                    indiceRow++;
                                    if(contadorPalabra > palabraSize){
                                        indiceCol++
                                        indiceRow-=contadorPalabra-2
                                        print("Felicidades la palabra fue Arriba a abajo, y las coordenadas son: Fila "+indiceRow+" y columna "+indiceCol);
                                        return solicitarPalabra();
                                    }
                                    if(indiceRow>49){
                                        indiceCol++;
                                        indiceRow = 0;
                                        letraSopaActual -=  4947; // Hacer salto de linea en la sopa de letras
                                        letraPalabraActual = letraPalabraActual - (contadorPalabra-1)
                                        contadorPalabra = 1
                                        return hagaloopArrAbj()
                                    }
                                    letraSopaActual +=101
                                }else{
                                    if(indiceRow < 49){
                                        if(contadorPalabra==1){
                                            letraSopaActual += 101 
                                            indiceRow+=1
                                            return hagaloopArrAbj()
                                        }
                                        if(contadorPalabra>1){
                                            if(contadorPalabra>2){
                                                letraSopaActual-=101
                                                indiceCol-=1
                                            }
                                            letraSopaActual-=(contadorPalabra-1)
                                            contadorPalabra=1
                                        }
                                    }
                                    else{
                                        if(indiceRow==49){
                                            if(indiceCol==49){
                                                startLoopAbjArr();
                                            }
                                            if(indiceCol<49){
                                                indiceCol+=1
                                                indiceRow=0
                                                letraSopaActual -=  4947 // Hacer salto de linea en la sopa de letras
                                                letraPalabraActual = letraPalabraActual - (contadorPalabra-1)
                                                contadorPalabra = 1
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        startLoopAbjArr(){
                            contadorPalabra = 1
                            indiceCol = 0
                            indiceRow = 49
                            letraSopaActual -=98
                            hagaloopAbjArr(){
                                while (contadorPalabra < palabraSize){
                                    if( letraPalabraActual == letraSopaActual){
                                        letraPalabraActual++;
                                        contadorPalabra++;
                                        indiceRow--;
                                        if(contadorPalabra > palabraSize){
                                            indiceCol++
                                            indiceRow-=contadorPalabra
                                            print("Felicidades la palabra fue Abajo a arriba, y las coordenadas son: Fila "+indiceRow+" y columna "+indiceCol);
                                            return solicitarPalabra();
                                        }
                                        if(indiceRow>49){
                                            indiceCol++;
                                            indiceRow = 49;
                                            letraSopaActual +=  4951; // Hacer salto de linea en la sopa de letras
                                            letraPalabraActual = letraPalabraActual - (contadorPalabra-1)
                                            contadorPalabra = 1
                                            return hagaloopArrAbj()
                                        }
                                        letraSopaActual -=101
                                    }else{
                                        if(indiceRow > 49){
                                            if(contadorPalabra==1){
                                                letraSopaActual -= 101 
                                                indiceRow-=1
                                                return hagaloopArrAbj()
                                            }
                                            if(contadorPalabra>1){
                                                if(contadorPalabra>2){
                                                    letraSopaActual-=101
                                                    indiceCol-=1
                                                }
                                                letraSopaActual-=(contadorPalabra-1)
                                                contadorPalabra=1
                                            }
                                        }
                                        else{
                                            if(indiceRow==49){
                                                if(indiceCol==49){
                                                    print("Lo sentimos, la palabra no fue encontrada.")
                                                    return solicitarPalabra();
                                                }
                                                if(indiceCol<49){
                                                    indiceCol+=1
                                                    indiceRow=49
                                                    letraSopaActual +=  4951 // Hacer salto de linea en la sopa de letras
                                                    letraPalabraActual = letraPalabraActual - (contadorPalabra-1)
                                                    contadorPalabra = 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            else{
                print("La longitud de la palabra no es valida, ingresala nuevamente.");
                return solicitarPalabra;
            }
        }
        else{
            print("La longitud de la palabra no es valida, ingresala nuevamente.");
            return solicitarPalabra;
        }
    Fin solicitarPalabra
FinAlgoritmo