"use client"

import { BrowserMultiFormatReader } from "@zxing/browser"
import { useEffect, useState } from "react"

export default function Add() {
  const [code, setCode] = useState("")
  const [log, setLog] = useState(false)

  useEffect(() => {
    const video = document.querySelector("video")!

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream
    })

    new BrowserMultiFormatReader().decodeFromVideoElement(video, (result) => {
      if (result) {
        setCode(result.getText())
        setLog(true)
      }
    })
  }, [])

  return (
    <>
      <h1>Add</h1>

      {log ? (
        <>
          <p>X</p>
        </>
      ) : (
        <video autoPlay />
      )}
    </>
  )
}
