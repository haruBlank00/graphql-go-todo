// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Comment struct {
	ID     string `json:"id"`
	Text   string `json:"text"`
	UserID string `json:"userId"`
}

type DeleteTodoInput struct {
	TodoID string `json:"todoId"`
}

type Mutation struct {
}

type NewCommentInput struct {
	Text   string `json:"text"`
	UserID string `json:"userId"`
	TodoID string `json:"todoId"`
}

type NewTodoInput struct {
	Text   string `json:"text"`
	UserID string `json:"userId"`
}

type NewUserInput struct {
	Name string `json:"name"`
}

type Query struct {
}

type Subscription struct {
}

type Time struct {
	UnixTime  int    `json:"unixTime"`
	TimeStamp string `json:"timeStamp"`
}

type Todo struct {
	ID       string     `json:"id"`
	Text     string     `json:"text"`
	Done     bool       `json:"done"`
	UserID   string     `json:"userId"`
	Comments []*Comment `json:"comments"`
}

type TodoID struct {
	ID string `json:"id"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
