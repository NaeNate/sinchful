"use client"

import { BrowserMultiFormatReader } from "@zxing/browser"
import { useEffect, useState } from "react"
import { getFood } from "./actions"

export default function Add() {
  const [code, setCode] = useState("")

  useEffect(() => {
    const video = document.querySelector("video")!
    const reader = new BrowserMultiFormatReader()

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream
    })

    reader.decodeFromVideoElement(video, (result, error, controls) => {
      if (result) {
        getFood(result.getText())
        controls.stop()
      }
    })
  }, [])

  return (
    <>
      {code ? (
        <>
          <p>Test</p>
        </>
      ) : (
        <>
          <video />
        </>
      )}
    </>
  )
}
