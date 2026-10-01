import { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const unidades = [
  '',
  'UNO',
  'DOS',
  'TRES',
  'CUATRO',
  'CINCO',
  'SEIS',
  'SIETE',
  'OCHO',
  'NUEVE',
];

const especiales = [
  'DIEZ',
  'ONCE',
  'DOCE',
  'TRECE',
  'CATORCE',
  'QUINCE',
  'DIECISÉIS',
  'DIECISIETE',
  'DIECIOCHO',
  'DIECINUEVE',
];

const decenas = [
  '',
  '',
  'VEINTE',
  'TREINTA',
  'CUARENTA',
  'CINCUENTA',
  'SESENTA',
  'SETENTA',
  'OCHENTA',
  'NOVENTA',
];

const centenas = [
  '',
  'CIENTO',
  'DOSCIENTOS',
  'TRESCIENTOS',
  'CUATROCIENTOS',
  'QUINIENTOS',
  'SEISCIENTOS',
  'SETECIENTOS',
  'OCHOCIENTOS',
  'NOVECIENTOS',
];

const numeroALetras = (numero: number): string => {
  if (numero === 1000) {
    return 'MIL';
  }

  if (numero < 10) {
    return unidades[numero];
  }

  if (numero < 20) {
    return especiales[numero - 10];
  }

  if (numero < 100) {
    const decena = Math.floor(numero / 10);
    const unidad = numero % 10;

    if (numero < 30) {
      if (numero === 20) {
        return 'VEINTE';
      }

      return 'VEINTI' + unidades[unidad].toLowerCase();
    }

    if (unidad === 0) {
      return decenas[decena];
    }

    return decenas[decena] + ' Y ' + unidades[unidad];
  }

  const centena = Math.floor(numero / 100);
  const resto = numero % 100;

  if (numero === 100) {
    return 'CIEN';
  }

  if (resto === 0) {
    return centenas[centena];
  }

  return centenas[centena] + ' ' + numeroALetras(resto);
};

const NumerosLetras: React.FC = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const convertir = () => {
    const valor = Number(numero);

    if (valor < 1 || valor > 1000 || !Number.isInteger(valor)) {
      setResultado('Ingrese un número entero del 1 al 1000.');
      return;
    }

    setResultado(numeroALetras(valor));
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Número a Letras</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <div
          style={{
            padding: '30px',
            textAlign: 'center',
          }}
        >

          <h1>Número a Letras</h1>

          <p>
            Ingrese un número del 1 al 1000
          </p>

          <IonInput
            label="Número"
            labelPlacement="stacked"
            type="number"
            placeholder="Ejemplo: 125"
            value={numero}
            onIonInput={(e) =>
              setNumero(e.detail.value ?? '')
            }
          />

          <br />

          <IonButton onClick={convertir}>
            CONVERTIR
          </IonButton>

          <h2>Resultado:</h2>

          <h2>{resultado}</h2>

        </div>

      </IonContent>

    </IonPage>
  );
};

export default NumerosLetras;