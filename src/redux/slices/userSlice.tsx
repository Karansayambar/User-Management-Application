import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface UserState {
  users: UserData[];
  userDetails: UserData | null;
  loading: boolean;
  error: string | null;
}


const allUsers: UserData[] = JSON.parse(localStorage.getItem("users") || "[]");

const initialState: UserState = {
  users: allUsers || [],
  userDetails: null,
  loading: false,
  error: null,
};

export const fetchUsersData = createAsyncThunk<UserData[]>(
  "users/fetchUsers",
  async () => {
    const all: UserData[] = JSON.parse(localStorage.getItem("users") || "[]");

    if (all.length === 0) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const apiUsers = response.data;
      const mergedUsers = [...apiUsers];
      localStorage.setItem("users", JSON.stringify(mergedUsers));
      return mergedUsers;
    } else {
      return all;
    }
  }
);

export const fetchUserById = createAsyncThunk<UserData, string>(
  "users/fetchUserById",
  async (id) => {
    // Check if user exists in localStorage first
    const all: UserData[] = JSON.parse(localStorage.getItem("users") || "[]");
    const finduser = all.filter((user) => user.id.toString() === id);
    return finduser[0];
  }
);

export const addUser = createAsyncThunk<UserData[], UserData>(
  "users/addUser",
  async (user: UserData) => {

    const all: UserData[] = JSON.parse(localStorage.getItem("users") || "[]");
    const newUsers = all || [];
    const lastUser = newUsers[newUsers.length - 1]
    const newuser = user;
    const newid = parseInt(lastUser.id) + 1;
    user.id = newid.toString();
    newUsers.push(newuser);

    

    // Save new user to localStorage
    localStorage.setItem("users", JSON.stringify(newUsers));

    return newUsers;
  }
);


export const updateUser = createAsyncThunk<UserData[], UserData>(
  "users/addUser",
  async (user) => {
    const all: UserData[] = JSON.parse(localStorage.getItem("users") || "[]");
    const newUsers = all || [];
    const updateUsers = newUsers.map((prevUser) => {
      if (prevUser.id === user.id) {
        return user;
      }
      return prevUser;
    });


    // Save new user to localStorage
    localStorage.setItem("users", JSON.stringify(updateUsers));

    return updateUsers;
  }
);

export const deleteUserById = createAsyncThunk<UserData[], string>(
  "users/deleteUser",
  async (id) => {
    console.log(typeof id);
    const all: UserData[] = JSON.parse(localStorage.getItem("users") || "[]");
    const allUpdatedUsers = all.filter((user) => user.id !== id);

    localStorage.setItem("users", JSON.stringify(allUpdatedUsers));
    return allUpdatedUsers;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user details";
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add user";
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Update state with the returned users
      })
      .addCase(deleteUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete user";
      });
  },
});

export default userSlice.reducer;
