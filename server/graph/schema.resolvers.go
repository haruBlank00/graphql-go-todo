package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.45

import (
	"context"
	"crypto/rand"
	"fmt"
	"math/big"
	"server/graph/model"
)

// CreateTodo is the resolver for the createTodo field.
func (r *mutationResolver) CreateTodo(ctx context.Context, input model.NewTodoInput) (*model.Todo, error) {
	// panic(fmt.Errorf("not implemented: CreateTodo - createTodo"))
	id := randNum()
	newTodo := &model.Todo{
		ID:     fmt.Sprintf("%d", id),
		Text:   input.Text,
		UserID: input.UserID,
		Done:   false,
	}
	r.todos = append(r.todos, newTodo)

	return newTodo, nil
}

// Createuser is the resolver for the createuser field.
func (r *mutationResolver) Createuser(ctx context.Context, input model.NewUserInput) (*model.User, error) {
	// panic(fmt.Errorf("not implemented: Todos - todos"))
	id := randNum()
	newUser := &model.User{
		ID:   fmt.Sprintf("%d", id),
		Name: input.Name,
	}
	r.users = append(r.users, newUser)
	return newUser, nil
}

// Todos is the resolver for the todos field.
func (r *queryResolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	return r.todos, nil
}

// Users is the resolver for the users field.
func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	return r.users, nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//   - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//     it when you're done.
//   - You have helper methods in this file. Move them out to keep these resolver files clean.
func randNum() *big.Int {
	randNumber, _ := rand.Int(rand.Reader, big.NewInt(100))
	return randNumber
}
