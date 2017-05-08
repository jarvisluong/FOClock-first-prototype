package com.foclock;

import com.facebook.react.ReactPackage;

import android.app.Application;

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;

public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
        // Make sure you are using BuildConfig from your own application
        return BuildConfig.DEBUG;
    }
    
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        
        // Add additional packages you require here
        return Arrays.<ReactPackage>asList(
                                           // eg. new VectorIconsPackage()
                                           );
        
        // No need to add RnnPackage and MainReactPackage
        // Simply return null if you do not have additional packages:
        // return null;
    }
}
