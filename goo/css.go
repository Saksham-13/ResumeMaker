package main

import (
	"image"
	"image/color"
	"log"
	"os"
)

func overlayPercentage(img1Path, img2Path string) (float64, error) {
	img1File, err := os.Open(img1Path)
	if err != nil {
		return 0, err
	}
	defer img1File.Close()

	img2File, err := os.Open(img2Path)
	if err != nil {
		return 0, err
	}
	defer img2File.Close()

	img1, _, err := image.Decode(img1File)
	if err != nil {
		return 0, err
	}

	img2, _, err := image.Decode(img2File)
	if err != nil {
		return 0, err
	}

	bounds := img1.Bounds()
	overlap := 0
	total := bounds.Dx() * bounds.Dy()

	for y := bounds.Min.Y; y < bounds.Max.Y; y++ {
		for x := bounds.Min.X; x < bounds.Max.X; x++ {
			c1 := img1.At(x, y)
			c2 := img2.At(x, y)
			_, _, _, a1 := color.RGBA64Model.Convert(c1).RGBA()
			_, _, _, a2 := color.RGBA64Model.Convert(c2).RGBA()
			if a1 != 0 && a2 != 0 && c1 == c2 {
				overlap++
			}
		}
	}

	return float64(overlap) / float64(total), nil
}

func main() {
	percent, err := overlayPercentage("red.jpeg", "red.jpeg")
	if err != nil {
		log.Fatalf("Error: %v", err)
	}
	println("Percentage of overlay:", percent)
}
