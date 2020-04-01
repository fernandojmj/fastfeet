import React, { useState, useEffect, useMemo } from "react";

export default function SimpleDialogDemo() {
  // const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const arrayData = [
    {
      id: 8,
      product: "cd",
      signatureId: "",
      canceledAt: null,
      startDate: null,
      endDate: "2020-03-22T18:19:50.000Z",
      createdAt: "2020-03-19T06:13:57.000Z",
      updatedAt: "2020-03-22T22:58:15.000Z",
      recipient_id: 1,
      deliveryman_id: 1,
      deliveryman: {
        id: 1,
        name: "Alexssandro morais de oliveira",
        email: "entregador1@gmail.com",
        avatarId: "",
        createdAt: "2020-03-19T05:01:52.000Z",
        updatedAt: "2020-03-30T06:16:03.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 9,
      product: "alcoo em gel",
      signatureId: "",
      canceledAt: null,
      startDate: "2020-03-21T19:35:26.000Z",
      endDate: null,
      createdAt: "2020-03-19T17:38:30.000Z",
      updatedAt: "2020-03-29T05:21:24.000Z",
      recipient_id: 1,
      deliveryman_id: 5,
      deliveryman: {
        id: 5,
        name: "arlindo",
        email: "arlindo@desafio.com",
        avatarId: "",
        createdAt: "2020-03-23T06:44:08.000Z",
        updatedAt: "2020-03-23T06:44:08.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 11,
      product: "Cueca",
      signatureId: "",
      canceledAt: null,
      startDate: "2020-03-21T19:38:25.000Z",
      endDate: "2020-03-21T19:52:40.000Z",
      createdAt: "2020-03-21T18:06:04.000Z",
      updatedAt: "2020-03-29T05:21:36.000Z",
      recipient_id: 1,
      deliveryman_id: 4,
      deliveryman: {
        id: 4,
        name: "fernando",
        email: "fernandov@desafio.com",
        avatarId: "",
        createdAt: "2020-03-23T06:43:57.000Z",
        updatedAt: "2020-03-23T06:43:57.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 12,
      product: "Leptop",
      signatureId: "",
      canceledAt: "2020-03-23T05:54:27.000Z",
      startDate: "2020-03-23T02:05:03.000Z",
      endDate: null,
      createdAt: "2020-03-21T19:37:38.000Z",
      updatedAt: "2020-03-30T05:54:14.000Z",
      recipient_id: 1,
      deliveryman_id: 4,
      deliveryman: {
        id: 4,
        name: "fernando",
        email: "fernandov@desafio.com",
        avatarId: "",
        createdAt: "2020-03-23T06:43:57.000Z",
        updatedAt: "2020-03-23T06:43:57.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 13,
      product: "drone",
      signatureId: "",
      canceledAt: "2020-03-23T06:03:18.000Z",
      startDate: null,
      endDate: null,
      createdAt: "2020-03-22T23:06:02.000Z",
      updatedAt: "2020-03-30T05:55:03.000Z",
      recipient_id: 1,
      deliveryman_id: 4,
      deliveryman: {
        id: 4,
        name: "fernando",
        email: "fernandov@desafio.com",
        avatarId: "",
        createdAt: "2020-03-23T06:43:57.000Z",
        updatedAt: "2020-03-23T06:43:57.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 14,
      product: "Geladeira",
      signatureId: "",
      canceledAt: null,
      startDate: null,
      endDate: null,
      createdAt: "2020-03-22T23:06:13.000Z",
      updatedAt: "2020-03-30T05:55:18.000Z",
      recipient_id: 1,
      deliveryman_id: 4,
      deliveryman: {
        id: 4,
        name: "fernando",
        email: "fernandov@desafio.com",
        avatarId: "",
        createdAt: "2020-03-23T06:43:57.000Z",
        updatedAt: "2020-03-23T06:43:57.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 15,
      product: "Sofa",
      signatureId: "",
      canceledAt: null,
      startDate: "2020-03-22T23:13:48.000Z",
      endDate: null,
      createdAt: "2020-03-22T23:06:18.000Z",
      updatedAt: "2020-03-30T05:55:27.000Z",
      recipient_id: 1,
      deliveryman_id: 4,
      deliveryman: {
        id: 4,
        name: "fernando",
        email: "fernandov@desafio.com",
        avatarId: "",
        createdAt: "2020-03-23T06:43:57.000Z",
        updatedAt: "2020-03-23T06:43:57.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 16,
      product: "sabonete 5",
      signatureId: "",
      canceledAt: null,
      startDate: "2020-03-22T23:13:52.000Z",
      endDate: null,
      createdAt: "2020-03-22T23:06:25.000Z",
      updatedAt: "2020-03-22T23:13:52.000Z",
      recipient_id: 1,
      deliveryman_id: 1,
      deliveryman: {
        id: 1,
        name: "Alexssandro morais de oliveira",
        email: "entregador1@gmail.com",
        avatarId: "",
        createdAt: "2020-03-19T05:01:52.000Z",
        updatedAt: "2020-03-30T06:16:03.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 17,
      product: "sabonete 6",
      signatureId: "",
      canceledAt: null,
      startDate: "2020-03-22T23:13:56.000Z",
      endDate: null,
      createdAt: "2020-03-22T23:06:28.000Z",
      updatedAt: "2020-03-22T23:13:56.000Z",
      recipient_id: 1,
      deliveryman_id: 1,
      deliveryman: {
        id: 1,
        name: "Alexssandro morais de oliveira",
        email: "entregador1@gmail.com",
        avatarId: "",
        createdAt: "2020-03-19T05:01:52.000Z",
        updatedAt: "2020-03-30T06:16:03.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 18,
      product: "sabonete 7",
      signatureId: "",
      canceledAt: null,
      startDate: "2020-03-22T23:14:00.000Z",
      endDate: null,
      createdAt: "2020-03-22T23:06:31.000Z",
      updatedAt: "2020-03-22T23:14:00.000Z",
      recipient_id: 1,
      deliveryman_id: 1,
      deliveryman: {
        id: 1,
        name: "Alexssandro morais de oliveira",
        email: "entregador1@gmail.com",
        avatarId: "",
        createdAt: "2020-03-19T05:01:52.000Z",
        updatedAt: "2020-03-30T06:16:03.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 19,
      product: "sabonete 8",
      signatureId: "",
      canceledAt: null,
      startDate: null,
      endDate: null,
      createdAt: "2020-03-22T23:06:34.000Z",
      updatedAt: "2020-03-22T23:06:34.000Z",
      recipient_id: 1,
      deliveryman_id: 1,
      deliveryman: {
        id: 1,
        name: "Alexssandro morais de oliveira",
        email: "entregador1@gmail.com",
        avatarId: "",
        createdAt: "2020-03-19T05:01:52.000Z",
        updatedAt: "2020-03-30T06:16:03.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 20,
      product: "sabonete 9",
      signatureId: "",
      canceledAt: null,
      startDate: null,
      endDate: null,
      createdAt: "2020-03-22T23:06:41.000Z",
      updatedAt: "2020-03-22T23:06:41.000Z",
      recipient_id: 1,
      deliveryman_id: 1,
      deliveryman: {
        id: 1,
        name: "Alexssandro morais de oliveira",
        email: "entregador1@gmail.com",
        avatarId: "",
        createdAt: "2020-03-19T05:01:52.000Z",
        updatedAt: "2020-03-30T06:16:03.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 21,
      product: "sabonete 10",
      signatureId: "",
      canceledAt: null,
      startDate: null,
      endDate: null,
      createdAt: "2020-03-22T23:06:45.000Z",
      updatedAt: "2020-03-22T23:06:45.000Z",
      recipient_id: 1,
      deliveryman_id: 1,
      deliveryman: {
        id: 1,
        name: "Alexssandro morais de oliveira",
        email: "entregador1@gmail.com",
        avatarId: "",
        createdAt: "2020-03-19T05:01:52.000Z",
        updatedAt: "2020-03-30T06:16:03.000Z"
      },
      recipient: {
        id: 1,
        name: "Casa Mario",
        rua: "Rua chingo",
        complemento: "abc",
        numero: 12,
        estado: "PE",
        cidade: "Recife",
        cep: 13123123,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    },
    {
      id: 22,
      product: "sabonete cremoso",
      signatureId: "",
      canceledAt: null,
      startDate: null,
      endDate: null,
      createdAt: "2020-04-01T00:51:34.000Z",
      updatedAt: "2020-04-01T00:51:34.000Z",
      recipient_id: 2,
      deliveryman_id: 5,
      deliveryman: {
        id: 5,
        name: "arlindo",
        email: "arlindo@desafio.com",
        avatarId: "",
        createdAt: "2020-03-23T06:44:08.000Z",
        updatedAt: "2020-03-23T06:44:08.000Z"
      },
      recipient: {
        id: 2,
        name: "sergio",
        rua: "tua das carambolas",
        complemento: "aaaa",
        numero: 1222,
        estado: "RJ",
        cidade: "rio de janeiro",
        cep: 32435642,
        createdAt: "2020-03-19T00:00:00.000Z",
        updatedAt: "2020-03-19T00:00:00.000Z"
      }
    }
  ];

  function handleClicked(delivery) {
    console.tron.log(delivery);
  }

  return (
    <div>
      {arrayData.map(data => (
        <p onClick={() => handleClicked(data)}>{data.product}</p>
      ))}
    </div>
  );
}
