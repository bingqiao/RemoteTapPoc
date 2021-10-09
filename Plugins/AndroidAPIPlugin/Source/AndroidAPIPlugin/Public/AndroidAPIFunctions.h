// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "UObject/NoExportTypes.h"
#include "AndroidAPIFunctions.generated.h"

/**
 * 
 */
UCLASS(NotBlueprintable)
class ANDROIDAPIPLUGIN_API UAndroidAPIFunctions : public UObject
{
	GENERATED_BODY()

public:

#if PLATFORM_ANDROID
	static void InitJavaFunctions();
#endif

	UFUNCTION(BlueprintCallable, meta = (Keywords = "AndroidAPI", DisplayName = "Show Toast"), Category = "AndroidAPI")
	static void AndroidAPIFunctions_ShowToast(const FString& Content);

	UFUNCTION(BlueprintCallable, meta = (Keywords = "AndroidAPI ", DisplayName = "Touch Location"), Category = "AndroidAPI")
	static void AndroidAPIFunctions_TouchLocation(const float X, const float Y);
	
};
