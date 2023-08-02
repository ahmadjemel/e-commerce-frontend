import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
fetchCategories, addCategorie, deleteCategorie, editCategorie, fetchCategorieById
} from "../services/categorieService"
export const getCategories = createAsyncThunk(
    "categorie/getCategories",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetchCategories();
            return res.data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const createCategorie = createAsyncThunk(
    "categorie/createCategorie",
    async (Categorie, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await addCategorie(Categorie);
            return res.data
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const deleteCategorie = createAsyncThunk(
    "categorie/deleteCategorie",
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await deleteCategorie(id);
            return id;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    });
export const updateCategorie = createAsyncThunk(
    "categorie/updateCategorie",
    async (Categorie, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await editCategorie(Categorie);
            return res.data
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const findCategorieByID = createAsyncThunk(
    "categorie/findCategorieByID",
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetchCategorieById(id);
            return res.data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    });
export const CategorieSlice = createSlice({
    name: 'Categorie',
    initialState: {
        Categories: [],
        Categorie: {},
        isLoading: false,
        success: null,
        error: null,
    },

    extraReducers: (builder) => {
        //get Categories
        builder
            .addCase(getCategories.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.Categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log("impossible de se connecter au serveur")
            })
            //insertion Categorie
            .addCase(createCategorie.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
                state.success = null;
            })
            .addCase(createCategorie.fulfilled, (state, action) => {
                state.Categories.push(action.payload);
                state.isLoading = false;
                state.error = null;
                state.success = action.payload;
            })
            .addCase(createCategorie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.success = null;
            })
            //Modification Categorie
            .addCase(updateCategorie.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
                state.success = null;
            })
            .addCase(updateCategorie.fulfilled, (state, action) => {
                state.Categories = state.Categories.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                );
                state.isLoading = false;
                state.error = null;
                state.success = action.payload;
            })
            //Delete Categorie
            .addCase(deleteCategorie.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteCategorie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.Categories = state.Categories.filter((item) =>
                    item._id !== action.payload)
            })
            .addCase(deleteCategorie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //Fectch Categorie
            .addCase(findCategorieByID.pending, (state, action) => {
                state.isLoading = true
                state.error = null;
            })
            .addCase(
                findCategorieByID.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.error = null
                    state.Categorie = action.payload;
                })
    }
}
)

export default CategorieSlice.reducer;