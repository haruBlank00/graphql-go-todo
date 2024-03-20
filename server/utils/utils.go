package utils

import (
	"github.com/google/uuid"
)

func RandNum() uint32 {
	return uuid.New().ID()
}

func FindOne() {

}
