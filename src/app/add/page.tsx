"use client"

import { BrowserMultiFormatReader } from "@zxing/browser"
import { useEffect, useState } from "react"

export default function Add() {
  const [auto, setAuto] = useState(true)
  const [code, setCode] = useState("")

  useEffect(() => {
    const video = document.querySelector("video")!
    const reader = new BrowserMultiFormatReader()

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => (video.srcObject = stream))
      .catch(() => setAuto(false))

    reader.decodeFromVideoElement(video, (result) => {
      if (result) {
        setCode(result.getText())
      }
    })
  }, [])

  return (
    <>
      <video />
    </>
  )
}
