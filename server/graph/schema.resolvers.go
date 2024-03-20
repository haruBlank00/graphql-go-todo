package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.45

import (
	"context"
	"fmt"
	"server/graph/model"
	"server/utils"
	"time"
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
func (r *mutationResolver) DeleteTodo(ctx context.Context, input model.DeleteTodoInput) (bool, error) {
	// panic(fmt.Errorf("not implemented: DeleteTodo - deleteTodo"))
	id := input.TodoID
	for i, todo := range r.todos {
		if todo.ID == id {
			r.todos = append(r.todos[:i], r.todos[i+1:]...)
			trueValue := true
			return trueValue, nil
		}
	}
	falseValue := false
	return falseValue, nil
}

// AddNewComment is the resolver for the addNewComment field.
func (r *mutationResolver) AddNewComment(ctx context.Context, input model.NewCommentInput) (*model.Comment, error) {
	id := input.TodoID
	text := input.Text
	userId := input.UserID
	var newComment *model.Comment
	for _, todo := range r.todos {
		if todo.ID == id {
			id := utils.RandNum()
			newComment = &model.Comment{
				ID:     fmt.Sprintf("%d", id),
				Text:   text,
				UserID: userId,
			}

			todo.Comments = append(todo.Comments, newComment)
		}
	}
	return newComment, nil
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

// Todo is the resolver for the todo field.
func (r *queryResolver) Todo(ctx context.Context, input *model.TodoID) (*model.Todo, error) {
	for _, todo := range r.todos {
		fmt.Println("current todo", todo)
		if todo.ID == input.ID {
			return todo, nil
		}
	}
	return nil, fmt.Errorf("todo not found")
}

// CommentAdded is the resolver for the commentAdded field.
func (r *subscriptionResolver) CommentAdded(ctx context.Context, todoID string) (<-chan *model.Comment, error) {
	ch := make(chan *model.Comment)

	go func() {
		defer close(ch)
	}()

	return ch, nil
}

// CurrentTime is the resolver for the currentTime field.
func (r *subscriptionResolver) CurrentTime(ctx context.Context) (<-chan *model.Time, error) {
	ch := make(chan *model.Time)

	go func() {
		defer close(ch)

		for {
			time.Sleep(1 * time.Second)

			fmt.Println("Tick")

			currentTime := time.Now()
			t := &model.Time{
				UnixTime:  int(currentTime.Unix()),
				TimeStamp: currentTime.Format((time.RFC3339)),
			}

			select {
			case <-ctx.Done():
				fmt.Println("Subscription closed")
				return
			case ch <- t:
				// do nothing, our message went through
			}
		}

	}()

	return ch, nil
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
