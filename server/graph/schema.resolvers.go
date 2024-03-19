package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.45

import (
	"context"
	"fmt"
	"server/graph/model"
	"server/utils"
)

// CreateTodo is the resolver for the createTodo field.
func (r *mutationResolver) CreateTodo(ctx context.Context, input model.NewTodoInput) (*model.Todo, error) {
	// panic(fmt.Errorf("not implemented: CreateTodo - createTodo"))
	id := utils.RandNum()
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
	id := utils.RandNum()
	newUser := &model.User{
		ID:   fmt.Sprintf("%d", id),
		Name: input.Name,
	}
	r.users = append(r.users, newUser)
	return newUser, nil
}

// DeleteTodo is the resolver for the deleteTodo field.
func (r *mutationResolver) DeleteTodo(ctx context.Context, input model.DeleteTodoInput) (*bool, error) {
	// panic(fmt.Errorf("not implemented: DeleteTodo - deleteTodo"))
	id := input.TodoID
	for i, todo := range r.todos {
		if todo.ID == id {
			r.todos = append(r.todos[:i], r.todos[i+1:]...)
			trueValue := true
			return &trueValue, nil
		}
	}
	falseValue := false
	return &falseValue, nil
}

// Todos is the resolver for the todos field.
func (r *queryResolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	if len(r.todos) == 0 {
		r.PopulateDummyData()
	}
	return r.todos, nil
}

// Users is the resolver for the users field.
func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	return r.users, nil
}

// CommentAdded is the resolver for the commentAdded field.
func (r *subscriptionResolver) CommentAdded(ctx context.Context, todoID string) (<-chan *model.Comment, error) {
	panic(fmt.Errorf("not implemented: CommentAdded - commentAdded"))
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

// Subscription returns SubscriptionResolver implementation.
func (r *Resolver) Subscription() SubscriptionResolver { return &subscriptionResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }
