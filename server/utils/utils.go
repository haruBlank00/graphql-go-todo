package utils

import (
	"crypto/rand"
	"math/big"
)

func RandNum() *big.Int {
	randNumber, _ := rand.Int(rand.Reader, big.NewInt(100))
	return randNumber
}
